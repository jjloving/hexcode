import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD

  if (!email || !password) {
    console.error('Admin email and password must be set in environment variables')
    process.exit(1)
  }

  try {
    const hashedPassword = await hash(password, 10)
    
    const user = await prisma.user.upsert({
      where: { email },
      update: {
        password: hashedPassword
      },
      create: {
        email,
        password: hashedPassword,
        name: 'Admin'
      }
    })

    console.log(`Admin user created/updated: ${user.email}`)
  } catch (error) {
    console.error('Error creating admin user:', error)
    process.exit(1)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })