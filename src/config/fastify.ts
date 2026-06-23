import fastify from 'fastify'

import { organizationRoutes } from '@/modules/organization/organization.routes'
import { petRoutes } from '@/modules/pet/pet.routes'

export default async function buildApp() {
  const app = fastify()

  // Register rotas
  app.register(organizationRoutes)
  app.register(petRoutes)

  return app
}
