import { brukerflateSchemas } from './brukerflate/schema'
import { saksbehandlerflateSchemas } from './saksbehandlerflate/schema'
import { landingssideSchemas } from './landingsside/schema'

export const meldekortSchemas = [
  ...brukerflateSchemas,
  ...saksbehandlerflateSchemas,
  ...landingssideSchemas,
]
