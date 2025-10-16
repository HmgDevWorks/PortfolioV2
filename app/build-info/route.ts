import { NextResponse } from 'next/server'
import { BUILD_TIME, COMMIT_SHA } from '../../utils/build-info'

// This route handler provides the Git commit SHA at runtime.
// It's used by the GitHub Actions workflow to verify that the
// latest deployment is live before generating the PDF.
export async function GET() {
  return NextResponse.json({
    commitSha: COMMIT_SHA,
    buildTime: BUILD_TIME,
    message: 'fr fr no cap, you found our secret endpoint bestie! slay! 💅✨',
  })
}
