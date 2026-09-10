import { meldekortForside } from './saksbehandlerflate/sider/forside'
import { meldekortHovedside } from './saksbehandlerflate/sider/hovedside'
import { meldekortBekreftModal } from './saksbehandlerflate/modaler/bekreftModal'
import { meldekortHistorikkModal } from './saksbehandlerflate/modaler/historikkModal'
import { meldekortHeader } from './saksbehandlerflate/fellesKomponenter/header'
import { meldekortPersonlinje } from './saksbehandlerflate/fellesKomponenter/personlinje'
import { meldekortAktiviteter } from './saksbehandlerflate/fellesKomponenter/aktiviteter'
import { meldekortStatuser } from './saksbehandlerflate/fellesKomponenter/statuser'
import { meldekortAktivitetsTabell } from './saksbehandlerflate/fellesKomponenter/aktivitetsTabell'
import { meldekortKalender } from './saksbehandlerflate/fellesKomponenter/kalender'
import { meldekortVarsler } from './saksbehandlerflate/fellesKomponenter/varsler'
import { meldekortLandingsside } from './landingsside/landingsside'
import { meldekortBrukerflateGrunntekster } from './brukerflate/felles/grunntekster'
import { meldekortBrukerflateKnapper } from './brukerflate/felles/knapper'
import { meldekortBrukerflateArbeidssokerstatusBeskjeder } from './brukerflate/felles/arbeidssokerstatusBeskjeder'
import { meldekortBrukerflateAktiviteter } from './brukerflate/felles/aktiviteter'
import { meldekortBrukerflateVeileder } from './brukerflate/felles/veileder'
import { meldekortBrukerflateMeldekortdetaljer } from './brukerflate/felles/meldekortdetaljer'
import { meldekortBrukerflateVelkomstside } from './brukerflate/velkomstside'
import { meldekortBrukerflateUtfylling } from './brukerflate/utfylling'
import { meldekortBrukerflateKvittering } from './brukerflate/kvittering'
import { meldekortBrukerflateOversikt } from './brukerflate/oversikt'

export const meldekortSingletonActions = new Set(['publish', 'restore', 'discardChanges'])

export const meldekortSingletonTypes: Set<string> = new Set([
  meldekortForside.name,
  meldekortHovedside.name,
  meldekortLandingsside.name,
  meldekortBrukerflateGrunntekster.name,
  meldekortBrukerflateKnapper.name,
  meldekortBrukerflateArbeidssokerstatusBeskjeder.name,
  meldekortBrukerflateAktiviteter.name,
  meldekortBrukerflateVeileder.name,
  meldekortBrukerflateMeldekortdetaljer.name,
  meldekortBrukerflateVelkomstside.name,
  meldekortBrukerflateUtfylling.name,
  meldekortBrukerflateKvittering.name,
  meldekortBrukerflateOversikt.name,
  meldekortBekreftModal.name,
  meldekortHistorikkModal.name,
  meldekortHeader.name,
  meldekortPersonlinje.name,
  meldekortAktiviteter.name,
  meldekortStatuser.name,
  meldekortAktivitetsTabell.name,
  meldekortKalender.name,
  meldekortVarsler.name,
])
