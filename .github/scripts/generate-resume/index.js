const { generatePDF } = require('./pdf-generator')
const { generateMarkdown } = require('./markdown-generator')

async function main() {
  console.log('🚀 Starting resume generation...')

  try {
    const siteUrl = process.env.SITE_URL || 'https://santiespada.dev'

    // Generate PDF (existing functionality)
    console.log('📄 Generating PDF files...')
    await generatePDF(siteUrl)

    // Generate Markdown files (new functionality)
    console.log('📝 Generating Markdown files...')
    await generateMarkdown(siteUrl)

    console.log('✅ Resume generation completed successfully!')
  } catch (error) {
    console.error('❌ Resume generation failed:', error)
    process.exit(1)
  }
}

main()
