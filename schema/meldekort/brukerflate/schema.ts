import { rapporteringAppText } from './rapporteringAppText'
import { rapporteringRichText } from './rapporteringRichText'
import { rapporteringLink } from './rapporteringLink'
import { dynamicField } from './common-fields'
import { rapporteringMessage } from './rapporteringMessage'
import { meldekortBrukerflateGrunntekster } from './felles/grunntekster'
import { meldekortBrukerflateKnapper } from './felles/knapper'
import { meldekortBrukerflateArbeidssokerstatusBeskjeder } from './felles/arbeidssokerstatusBeskjeder'
import { meldekortBrukerflateAktiviteter } from './felles/aktiviteter'
import { meldekortBrukerflateVeileder } from './felles/veileder'
import { meldekortBrukerflateMeldekortdetaljer } from './felles/meldekortdetaljer'
import { meldekortBrukerflateVelkomstside } from './velkomstside'
import { meldekortBrukerflateUtfylling } from './utfylling'
import { meldekortBrukerflateKvittering } from './kvittering'
import { meldekortBrukerflateOversikt } from './oversikt'

export const brukerflateSchemas = [
  rapporteringAppText,
  rapporteringRichText,
  rapporteringLink,
  rapporteringMessage,
  dynamicField,
  meldekortBrukerflateGrunntekster,
  meldekortBrukerflateKnapper,
  meldekortBrukerflateArbeidssokerstatusBeskjeder,
  meldekortBrukerflateAktiviteter,
  meldekortBrukerflateVeileder,
  meldekortBrukerflateMeldekortdetaljer,
  meldekortBrukerflateVelkomstside,
  meldekortBrukerflateUtfylling,
  meldekortBrukerflateKvittering,
  meldekortBrukerflateOversikt,
]
