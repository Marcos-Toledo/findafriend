import type { FastifyInstance } from 'fastify'

import { petController } from './pet.controller'

export async function petRoutes(app: FastifyInstance) {
  // POST /pets
  app.post('/pets', {}, async (request, reply) => {
    return petController.create(request, reply)
  })

  // PUT /pets/:id
  app.put('/pets/:id', {}, async (request, reply) => {
    return petController.update(request, reply)
  })
}
