const puppeteer = require('puppeteer')
const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

// Chrome stamps the current time into /CreationDate and /ModDate, so two runs over
// the same CV produce different bytes and every build would look like a content
// change. Pinning the value keeps the output reproducible; the replacement has the
// same length as the original so the xref offsets stay valid.
const PINNED_PDF_DATE = '20000101000000'

function pinPdfTimestamps(pdfBytes) {
  // page.pdf() resolves to a Uint8Array, whose toString() ignores the encoding and
  // returns comma-separated byte values, so it has to be wrapped in a Buffer first.
  const normalized = Buffer.from(pdfBytes)
    .toString('latin1')
    .replace(/(\/(?:CreationDate|ModDate)\s*\(D:)\d{14}(\+00'00'\))/g, `$1${PINNED_PDF_DATE}$2`)

  const pdf = Buffer.from(normalized, 'latin1')
  if (pdf.subarray(0, 4).toString('latin1') !== '%PDF') {
    throw new Error('Refusing to write a file that is not a PDF')
  }

  return pdf
}

async function generatePDF(siteUrl) {
  console.log('📄 Loading page for PDF generation:', siteUrl)

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 })

    const pdfOptions = {
      format: 'A4',
      printBackground: true,
      margin: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      preferCSSPageSize: true,
      pageRanges: '1',
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
    fs.writeFileSync(esCvPath, pinPdfTimestamps(esPdfBuffer))
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
    fs.writeFileSync(enCvPath, pinPdfTimestamps(enPdfBuffer))
    console.log('✅ English CV generated')

    console.log('✅ PDF generation completed for both languages')
  } finally {
    await browser.close()
  }
}

module.exports = { generatePDF }
