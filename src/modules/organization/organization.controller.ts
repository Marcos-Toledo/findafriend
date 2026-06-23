import { type FastifyReply, type FastifyRequest } from 'fastify'

class OrganizationController {
  /**
   * POST /organizations
   * Criar uma nova organização
   */
  async create(request: FastifyRequest, reply: FastifyReply) {}

  /**
   * PUT /organizations/:id
   * Atualizar uma organização
   */
  async update(request: FastifyRequest, reply: FastifyReply) {}
}

export const organizationController = new OrganizationController()
