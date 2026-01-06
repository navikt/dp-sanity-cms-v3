import { meldekortForside } from './saksbehandlerflate/sider/forside'
import { meldekortHovedside } from './saksbehandlerflate/sider/hovedside'
import { meldekortBekreftModal } from './saksbehandlerflate/modaler/bekreftModal'
import { meldekortHistorikkModal } from './saksbehandlerflate/modaler/historikkModal'

export const meldekortSingletonActions = new Set(['publish', 'restore', 'discardChanges'])

export const meldekortSingletonTypes: Set<string> = new Set([
  meldekortForside.name,
  meldekortHovedside.name,
  meldekortBekreftModal.name,
  meldekortHistorikkModal.name,
])
