export const BUILD_TIME = new Date().toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

// Vercel provides this environment variable at build time.
// It falls back to "local" for local development.
// https://vercel.com/docs/projects/environment-variables/system-environment-variables
export const COMMIT_SHA = process.env.VERCEL_GIT_COMMIT_SHA || 'local'
