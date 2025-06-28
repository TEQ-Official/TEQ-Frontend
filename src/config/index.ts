const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL

if (!apiBaseUrl) throw new Error(`Env: NEXT_PUBLIC_API_BASE_URL is missing`)

export const APP_CONFIG = {
  API_BASE_URL: apiBaseUrl,
}
