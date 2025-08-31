const fs = require('fs').promises;
const path = require('path');

async function updateProjectsFile() {
  console.log('📝 Updating projects.ts with new image paths...');

  const projectsPath = path.join(process.cwd(), 'data', 'projects.ts');
  const imagesDir = path.join(process.cwd(), 'public', 'images', 'projects');

  try {
    // Read the current projects file
    let projectsContent = await fs.readFile(projectsPath, 'utf8');
    
    // Get list of generated images
    const imageFiles = await fs.readdir(imagesDir);
    const webpFiles = imageFiles.filter(file => file.endsWith('.webp'));
    
    console.log(`🖼️ Found ${webpFiles.length} WebP images to update:`);
    webpFiles.forEach(file => console.log(`  - ${file}`));

    let updatedCount = 0;

    // For each WebP image, update the corresponding project
    for (const imageFile of webpFiles) {
      const projectId = path.basename(imageFile, '.webp');
      const imagePath = `/images/projects/${imageFile}`;
      
      // Create regex to find the project and update its image field
      const projectRegex = new RegExp(
        `(\\s*{[^}]*id:\\s*["']${projectId}["'][^}]*image:\\s*)["'][^"']*["']`,
        'g'
      );

      const beforeUpdate = projectsContent;
      projectsContent = projectsContent.replace(
        projectRegex,
        `$1"${imagePath}"`
      );

      if (beforeUpdate !== projectsContent) {
        updatedCount++;
        console.log(`✅ Updated image path for ${projectId} → ${imagePath}`);
      } else {
        console.log(`⚠️ Could not find project ${projectId} to update`);
      }
    }

    // Write the updated content back to the file
    await fs.writeFile(projectsPath, projectsContent, 'utf8');
    
    console.log(`🎉 Updated ${updatedCount} project image paths in projects.ts`);

  } catch (error) {
    console.error('❌ Error updating projects.ts:', error);
    process.exit(1);
  }
}

// Handle errors gracefully
process.on('unhandledRejection', (error) => {
  console.error('❌ Unhandled promise rejection:', error);
  process.exit(1);
});

// Run the function
updateProjectsFile().catch(error => {
  console.error('❌ Failed to update projects.ts:', error);
  process.exit(1);
});
