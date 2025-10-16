const puppeteer = require('puppeteer')

async function extractContentFromPage(siteUrl) {
  console.log('🔍 Extracting content from page:', siteUrl)

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  })

  try {
    const page = await browser.newPage()
    await page.goto(siteUrl, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    })

    // Wait for any dynamic content to load
    await new Promise((r) => setTimeout(r, 5000))

    const content = await page.evaluate(() => {
      // Extract personal information
      const nameEl = document.querySelector('.name')
      const nicknameEl = document.querySelector('.nickname')
      const profileImg = document.querySelector('.profile-image')

      // Extract description paragraphs
      const textElements = document.querySelectorAll('.text')
      const description = Array.from(textElements).map((el) => el.textContent.trim())

      // Extract contact information
      const contactLinks = document.querySelectorAll('.contact ul li a')
      const contacts = Array.from(contactLinks).map((link) => ({
        text: link.textContent.trim(),
        href: link.href,
        type: link.href.includes('mailto:')
          ? 'email'
          : link.href.includes('tel:')
          ? 'phone'
          : link.href.includes('linkedin')
          ? 'linkedin'
          : link.href.includes('github')
          ? 'github'
          : 'other',
      }))

      // Extract availability information
      const availabilityWidget = document.querySelector('.availability-widget')
      let availability = null
      if (availabilityWidget) {
        const statusEl = availabilityWidget.querySelector('.availability-status p')
        const detailsEls = availabilityWidget.querySelectorAll('.availability-details p')

        availability = {
          status: statusEl ? statusEl.textContent.replace('Status:', '').trim() : '',
          details: Array.from(detailsEls).map((el) => el.textContent.trim()),
        }
      }

      // Extract education information
      const educationItems = document.querySelectorAll('.education-section-content ul li')
      const education = Array.from(educationItems).map((item) => {
        const title = item.querySelector('strong')?.textContent || ''
        const paragraphs = item.querySelectorAll('p')
        const details = Array.from(paragraphs).map((p) => p.textContent.trim())
        return { title, details }
      })

      // Extract skills (using attribute selector since skill-tag uses CSS modules)
      const skillTags = document.querySelectorAll('[class*="skill-tag"]')
      const skills = Array.from(skillTags).map((tag) => tag.textContent.trim())

      // Extract work experience
      const experienceCards = document.querySelectorAll('.job')
      const workExperience = Array.from(experienceCards).map((card) => {
        const date = card.querySelector('.date')?.textContent.trim() || ''
        const role = card.querySelector('.role')?.textContent.trim() || ''
        const company = card.querySelector('.company')?.textContent.trim() || ''
        const logo = card.querySelector('.company-logo')?.src || ''

        // Get description paragraphs
        const descriptionEls = card.querySelectorAll('.job-description p')
        const description = Array.from(descriptionEls).map((p) => p.textContent.trim())

        // Get takeaways
        const takeawaysList = card.querySelector('.job-take-aways ul')
        const takeaways = takeawaysList
          ? Array.from(takeawaysList.querySelectorAll('li')).map((li) => li.textContent.trim())
          : []

        // Get tech stack
        const techStackEl = card.querySelector('.job-tech-stack p')
        const techStack = techStackEl ? techStackEl.textContent.trim() : ''

        return {
          date,
          role,
          company,
          logo,
          description,
          takeaways,
          techStack,
        }
      })

      // Extract build info - try multiple selectors for the last updated date
      let lastUpdated = ''
      // Try CSS module selector for subtitle
      const windowSubtitle = document.querySelector('[class*="subtitle"]')
      if (windowSubtitle && windowSubtitle.textContent.includes('Last updated')) {
        lastUpdated = windowSubtitle.textContent.trim()
      } else {
        // Fallback: look for window title bar area
        const windowTitle = document.querySelector('[class*="window-title"]')
        if (windowTitle) {
          const subtitleInTitle = windowTitle.querySelector('[class*="subtitle"]')
          if (subtitleInTitle) {
            lastUpdated = subtitleInTitle.textContent.trim()
          }
        }
      }

      return {
        personal: {
          name: nameEl ? nameEl.textContent.trim() : '',
          nickname: nicknameEl ? nicknameEl.textContent.trim() : '',
          profileImage: profileImg ? profileImg.src : '',
          description,
        },
        contacts,
        availability,
        education,
        skills,
        workExperience,
        lastUpdated,
      }
    })

    console.log('✅ Content extraction completed')
    return content
  } finally {
    await browser.close()
  }
}

module.exports = { extractContentFromPage }
