const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

// Import projects data (we'll need to read and parse the TS file)
async function getProjects() {
  const fs = require('fs').promises;
  const path = require('path');
  
  const projectsPath = path.join(process.cwd(), 'data', 'projects.ts');
  const content = await fs.readFile(projectsPath, 'utf8');
  
  // Extract the projects array using regex (simple but works)
  const projectsMatch = content.match(/export const projects: Project\[\] = (\[[\s\S]*?\]);/);
  if (!projectsMatch) {
    throw new Error('Could not find projects array in projects.ts');
  }
  
  // Use eval to parse the array (in a controlled environment)
  const projectsString = projectsMatch[1]
    .replace(/(\w+):/g, '"$1":') // Convert object keys to strings
    .replace(/undefined/g, 'null'); // Convert undefined to null
  
  try {
    return JSON.parse(projectsString);
  } catch (error) {
    console.error('Error parsing projects array:', error);
    throw error;
  }
}

async function generateScreenshots() {
  const projectIds = process.env.PROJECT_IDS || 'all';
  console.log(`📸 Starting screenshot generation for: ${projectIds}`);

  // Get projects from file
  const projects = await getProjects();

  // Filter projects based on input
  let targetProjects;
  if (projectIds === 'all') {
    targetProjects = projects.filter(p => p.live && p.live.trim() !== '');
  } else {
    const ids = projectIds.split(',').map(id => id.trim());
    targetProjects = projects.filter(p => 
      ids.includes(p.id) && p.live && p.live.trim() !== ''
    );
  }

  if (targetProjects.length === 0) {
    console.log('❌ No projects with live URLs found to screenshot');
    return;
  }

  console.log(`📋 Found ${targetProjects.length} projects to screenshot:`);
  targetProjects.forEach(p => console.log(`  - ${p.id}: ${p.live}`));

  const browser = await puppeteer.launch({
    headless: true,
    // Let Puppeteer use its bundled Chrome
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--no-first-run',
      '--disable-background-timer-throttling',
      '--disable-backgrounding-occluded-windows',
      '--disable-renderer-backgrounding',
      '--disable-web-security',
      '--disable-features=VizDisplayCompositor',
    ],
  });

  const page = await browser.newPage();
  
  // Set viewport for consistent screenshots
  await page.setViewport({
    width: 1200,
    height: 800,
    deviceScaleFactor: 2 // For high-DPI screenshots
  });

  // Set user agent to avoid bot blocking
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  );

  for (const project of targetProjects) {
    try {
      console.log(`📸 Taking screenshot of ${project.id}...`);
      
      // Navigate to the project URL
      await page.goto(project.live, {
        waitUntil: 'networkidle0',
        timeout: 30000
      });

      // Wait a bit more for any animations/dynamic content
      await page.waitForTimeout(2000);

      // Take screenshot
      const screenshotPath = path.join(
        process.cwd(),
        'public',
        'images',
        'projects',
        `${project.id}.png`
      );

      await page.screenshot({
        path: screenshotPath,
        type: 'png',
        fullPage: false // Only visible area
      });

      console.log(`✅ Screenshot saved for ${project.id}`);

    } catch (error) {
      console.error(`❌ Failed to screenshot ${project.id}:`, error.message);
      
      // Create a placeholder image for failed screenshots
      const placeholderPath = path.join(
        process.cwd(),
        'public',
        'images',
        'projects',
        `${project.id}.png`
      );
      
      // You could generate a simple placeholder here or skip
      console.log(`⚠️ Skipping ${project.id} due to error`);
    }
  }

  await browser.close();
  console.log('🎉 Screenshot generation completed!');
}

// Handle errors gracefully
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled promise rejection:', error);
  process.exit(1);
});

// Run the function
generateScreenshots().catch(error => {
  console.error('❌ Screenshot generation failed:', error);
  process.exit(1);
});
