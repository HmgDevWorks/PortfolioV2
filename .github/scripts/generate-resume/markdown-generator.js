const fs = require('fs')
const path = require('path')
const { extractContentFromPage } = require('./content-extractor')

function generateMarkdownContent(content, includeImages = true) {
  const { personal, contacts, availability, education, skills, workExperience, lastUpdated } = content
  const baseUrl = 'https://santiespada.dev'

  let markdown = ''

  // Header with name and profile image
  markdown += `# ${personal.name}\n\n`

  if (includeImages && personal.profileImage) {
    const imageUrl = personal.profileImage.startsWith('http')
      ? personal.profileImage
      : `${baseUrl}${personal.profileImage}`
    markdown += `![Profile Picture](${imageUrl})\n\n`
  }

  if (personal.nickname) {
    markdown += `*${personal.nickname}*\n\n`
  }

  // Personal description
  if (personal.description && personal.description.length > 0) {
    markdown += `## About Me\n\n`
    personal.description.forEach((paragraph) => {
      markdown += `${paragraph}\n\n`
    })
  }

  // Contact information
  if (contacts && contacts.length > 0) {
    markdown += `## Contact Information\n\n`
    contacts.forEach((contact) => {
      if (contact.type === 'email' || contact.type === 'phone') {
        markdown += `- **${contact.type === 'email' ? 'Email' : 'Phone'}**: ${contact.text}\n`
      } else {
        markdown += `- **${contact.type.charAt(0).toUpperCase() + contact.type.slice(1)}**: [${contact.text}](${
          contact.href
        })\n`
      }
    })
    markdown += `\n`
  }

  // Availability status
  if (availability) {
    markdown += `## Availability\n\n`
    markdown += `${availability.status}\n\n`
    if (availability.details && availability.details.length > 0) {
      availability.details.forEach((detail) => {
        markdown += `${detail}\n\n`
      })
    }
  }

  // Education
  if (education && education.length > 0) {
    markdown += `## Education\n\n`
    education.forEach((edu) => {
      markdown += `### ${edu.title}\n`
      edu.details.forEach((detail) => {
        markdown += `${detail}\n`
      })
      markdown += `\n`
    })
  }

  // Skills
  if (skills && skills.length > 0) {
    markdown += `## Technologies & Skills\n\n`
    // Group skills in rows of 6 for better readability
    const skillsPerRow = 6
    for (let i = 0; i < skills.length; i += skillsPerRow) {
      const skillsRow = skills.slice(i, i + skillsPerRow)
      markdown += `${skillsRow.map((skill) => `\`${skill}\``).join(' • ')}\n`
    }
    markdown += `\n`
  }

  // Work Experience
  if (workExperience && workExperience.length > 0) {
    markdown += `## Work Experience\n\n`
    workExperience.forEach((job, index) => {
      markdown += `### ${job.role}\n`
      markdown += `**${job.company}** • ${job.date}\n\n`

      // Company logo
      if (includeImages && job.logo) {
        const logoUrl = job.logo.startsWith('http') ? job.logo : `${baseUrl}${job.logo}`
        markdown += `![${job.company} Logo](${logoUrl})\n\n`
      }

      // Description
      if (job.description && job.description.length > 0) {
        job.description.forEach((desc) => {
          markdown += `${desc}\n\n`
        })
      }

      // Takeaways
      if (job.takeaways && job.takeaways.length > 0) {
        markdown += `**Key Takeaways:**\n`
        job.takeaways.forEach((takeaway) => {
          markdown += `- ${takeaway}\n`
        })
        markdown += `\n`
      }

      // Tech Stack
      if (job.techStack) {
        markdown += `**Tech Stack:** ${job.techStack}\n\n`
      }

      // Add separator between jobs (except for the last one)
      if (index < workExperience.length - 1) {
        markdown += `---\n\n`
      }
    })
  }

  // Footer with last updated info
  markdown += `---\n\n`
  if (lastUpdated) {
    markdown += `*${lastUpdated}*\n`
  }
  markdown += `*Generated from [santiespada.dev](https://santiespada.dev)*\n`

  return markdown
}

async function generateMarkdown(siteUrl) {
  console.log('📝 Starting markdown generation...')

  // Extract content from the page
  const content = await extractContentFromPage(siteUrl)

  // Generate both versions
  const markdownWithImages = generateMarkdownContent(content, true)
  const markdownWithoutImages = generateMarkdownContent(content, false)

  // Save markdown files
  const workspaceRoot = path.resolve(__dirname, '../../..')
  const docsDir = path.join(workspaceRoot, 'public/docs')

  // Ensure the docs directory exists
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true })
  }

  const resumePath = path.join(docsDir, 'resume.md')
  const resumeNoImagesPath = path.join(docsDir, 'resume_no_images.md')

  fs.writeFileSync(resumePath, markdownWithImages, 'utf8')
  fs.writeFileSync(resumeNoImagesPath, markdownWithoutImages, 'utf8')

  console.log('✅ Markdown generation completed')
  console.log(`   - Generated: ${resumePath}`)
  console.log(`   - Generated: ${resumeNoImagesPath}`)
}

module.exports = { generateMarkdown, generateMarkdownContent }
