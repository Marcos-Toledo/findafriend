import type { FastifyReply, FastifyRequest } from 'fastify'

class PetController {
  /**
   * POST /pets
   * Criar um novo pet
   */
  async create(request: FastifyRequest, reply: FastifyReply) {}

  /**
   * PUT /pets/:id
   * Atualizar um pet
   */
  async update(request: FastifyRequest, reply: FastifyReply) {}
}

export const petController = new PetController()
