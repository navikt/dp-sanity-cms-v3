import { brukerflateSchemas } from './brukerflate/schema'
import { saksbehandlerflateSchemas } from './saksbehandlerflate/schema'

export const meldekortSchemas = [...brukerflateSchemas, ...saksbehandlerflateSchemas]
