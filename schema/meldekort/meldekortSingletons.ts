import { meldekortForside } from './saksbehandlerflate/sider/forside'
import { meldekortHovedside } from './saksbehandlerflate/sider/hovedside'
import { meldekortBekreftModal } from './saksbehandlerflate/modaler/bekreftModal'
import { meldekortHistorikkModal } from './saksbehandlerflate/modaler/historikkModal'
import { meldekortHeader } from './saksbehandlerflate/fellesKomponenter/header'
import { meldekortPersonlinje } from './saksbehandlerflate/fellesKomponenter/personlinje'
import { meldekortAktiviteter } from './saksbehandlerflate/fellesKomponenter/aktiviteter'
import { meldekortStatuser } from './saksbehandlerflate/fellesKomponenter/statuser'
import { meldekortFyllUtTabell } from './saksbehandlerflate/fellesKomponenter/fyllUtTabell'
import { meldekortKalender } from './saksbehandlerflate/fellesKomponenter/kalender'
import { meldekortVarsler } from './saksbehandlerflate/fellesKomponenter/varsler'

export const meldekortSingletonActions = new Set(['publish', 'restore', 'discardChanges'])

export const meldekortSingletonTypes: Set<string> = new Set([
  meldekortForside.name,
  meldekortHovedside.name,
  meldekortBekreftModal.name,
  meldekortHistorikkModal.name,
  meldekortHeader.name,
  meldekortPersonlinje.name,
  meldekortAktiviteter.name,
  meldekortStatuser.name,
  meldekortFyllUtTabell.name,
  meldekortKalender.name,
  meldekortVarsler.name,
])
