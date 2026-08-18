export const SITE_URL = 'https://hmgdevworks.vercel.app'

export const experienceAnchorId = (experienceId: string) => `exp-${experienceId}`

export const experienceWebUrl = (experienceId: string, language: 'es' | 'en') =>
  `${SITE_URL}/?lang=${language}#${experienceAnchorId(experienceId)}`
