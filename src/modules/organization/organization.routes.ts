import type { FastifyInstance } from 'fastify'

import { organizationController } from './organization.controller'

export async function organizationRoutes(app: FastifyInstance) {
  // POST /organizations
  app.post('/organizations', {}, async (request, reply) => {
    return organizationController.create(request, reply)
  })

  // PUT /organizations/:id
  app.put('/organizations/:id', {}, async (request, reply) => {
    return organizationController.update(request, reply)
  })
}
