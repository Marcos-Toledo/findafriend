import { env } from '@/config/env'
import buildApp from './config/fastify'

async function server() {
  try {
    const app = await buildApp()

    await app.listen({ port: env.PORT })
    console.log(`Server running on port ${env.PORT}`)
  } catch (error) {
    console.error('Failed to start server:', error)

    throw new Error('Failed to start server')
  }
}

server()
