import type { FastifyInstance } from 'fastify'
import { authController } from './auth.controller'

export async function authRoutes(app: FastifyInstance) {
  // POST /login
  app.post('/login', async (request, reply) => {
    return authController.login(request, reply)
  })
}
