import { brukerdialogSchemas } from './brukerdialog/schema'
import { mineDagpengerSchemas } from './mine-dagpenger/schema'
import { produktsideSchemas } from './produktside/schema'
import { rapporteringSchemas } from './rapportering/schema'
import { saksbehandlingSchemas } from './saksbehandling/schema'
import { soknadSchemas } from './soknad/shema'

export const schemaTypes = [
  ...produktsideSchemas,
  ...mineDagpengerSchemas,
  ...rapporteringSchemas,
  ...saksbehandlingSchemas,
  ...soknadSchemas,
  ...brukerdialogSchemas,
]
