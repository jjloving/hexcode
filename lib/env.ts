const requiredEnvVars = [
  'DATABASE_URL',
  'NEXTAUTH_URL',
  'NEXTAUTH_SECRET',
  'ADMIN_EMAIL',
  'ADMIN_PASSWORD'
] as const

type EnvVar = typeof requiredEnvVars[number]

function getEnvVar(key: EnvVar): string {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`)
  }
  return value
}

export const env = {
  database: {
    url: getEnvVar('DATABASE_URL'),
  },
  auth: {
    url: getEnvVar('NEXTAUTH_URL'),
    secret: getEnvVar('NEXTAUTH_SECRET'),
  },
  admin: {
    email: getEnvVar('ADMIN_EMAIL'),
    password: getEnvVar('ADMIN_PASSWORD'),
  },
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    name: process.env.NEXT_PUBLIC_SITE_NAME || 'Hexo Code',
  },
} as const