const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

async function generatePDF(siteUrl) {
  console.log('📄 Loading page for PDF generation:', siteUrl)

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1240, height: 1754, deviceScaleFactor: 2 })

    const pdfOptions = {
      format: 'A4',
      printBackground: true,
      margin: {
        top: '5mm',
        right: '5mm',
        bottom: '5mm',
        left: '5mm',
      },
      preferCSSPageSize: true,
      width: '210mm',
      height: '297mm',
    }

    // Save PDF files
    const workspaceRoot = path.resolve(__dirname, '../../..')
    const cvsDir = path.join(workspaceRoot, 'public/cvs')

    // Ensure the cvs directory exists
    if (!fs.existsSync(cvsDir)) {
      fs.mkdirSync(cvsDir, { recursive: true })
    }

    // Generate Spanish CV
    console.log('📋 Generating Spanish CV...')
    await page.goto(`${siteUrl}/cv?lang=es`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    })
    await new Promise((r) => setTimeout(r, 2000))

    const esPdfBuffer = await page.pdf(pdfOptions)
    const esCvPath = path.join(cvsDir, 'CV_Hector_Martin_ES.pdf')
    fs.writeFileSync(esCvPath, esPdfBuffer)
    console.log('✅ Spanish CV generated')

    // Generate English CV
    console.log('📋 Generating English CV...')
    await page.goto(`${siteUrl}/cv?lang=en`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    })
    await new Promise((r) => setTimeout(r, 2000))

    const enPdfBuffer = await page.pdf(pdfOptions)
    const enCvPath = path.join(cvsDir, 'CV_Hector_Martin_EN.pdf')
    fs.writeFileSync(enCvPath, enPdfBuffer)
    console.log('✅ English CV generated')

    console.log('✅ PDF generation completed for both languages')
  } finally {
    await browser.close()
  }
}

module.exports = { generatePDF }
