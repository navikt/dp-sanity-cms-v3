import { meldekortForside } from './saksbehandlerflate/sider/forside'
import { meldekortHovedside } from './saksbehandlerflate/sider/hovedside'

export const meldekortSingletonActions = new Set(['publish', 'restore', 'discardChanges'])

export const meldekortSingletonTypes: Set<string> = new Set([
  meldekortForside.name,
  meldekortHovedside.name,
])
