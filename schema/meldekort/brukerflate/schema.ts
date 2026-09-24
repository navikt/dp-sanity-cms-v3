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
import { MeldekortInnsendingsstatusBeskjed } from './felles/meldekortSendestatusBeskjed'
import { meldekortBrukerflateVelkomstside } from './velkomstside'
import { meldekortBrukerflateUtfylling } from './utfylling'
import { meldekortBrukerflateKvittering } from './kvittering'
import { meldekortBrukerflateOversikt } from './oversikt'
import { meldekortBrukerflateFeilmeldinger } from './felles/feilmeldinger'

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
  MeldekortInnsendingsstatusBeskjed,
  meldekortBrukerflateVelkomstside,
  meldekortBrukerflateUtfylling,
  meldekortBrukerflateKvittering,
  meldekortBrukerflateOversikt,
  meldekortBrukerflateFeilmeldinger,
]
