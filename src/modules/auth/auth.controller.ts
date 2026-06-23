import type { FastifyReply, FastifyRequest } from 'fastify'

class AuthController {
  async login(request: FastifyRequest, reply: FastifyReply) {}
}

export const authController = new AuthController()
