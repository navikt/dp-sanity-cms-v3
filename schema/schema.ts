import { brukerdialogSchemas } from './brukerdialog/schema'
import { mineDagpengerSchemas } from './mine-dagpenger/schema'
import { produktsideSchemas } from './produktside/schema'
import { meldekortSchemas } from './meldekort/schema'
import { saksbehandlingSchemas } from './saksbehandling/schema'
import { soknadSchemas } from './soknad/shema'

export const schemaTypes = [
  ...produktsideSchemas,
  ...mineDagpengerSchemas,
  ...meldekortSchemas,
  ...saksbehandlingSchemas,
  ...soknadSchemas,
  ...brukerdialogSchemas,
]
