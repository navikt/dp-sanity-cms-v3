import { seksjon } from './soknad/seksjon'
import { faktum } from './soknad/faktum'
import { svaralternativ } from './soknad/svaralternativ'
import { landgruppe } from './soknad/landgruppe'
import { infopage } from './soknad/infopage'
import { appText } from './soknad/appText'
import { navIconPicker, timeline, timelineElement } from './soknad/timeline'
import { alertTextField, readMoreField } from './soknad/common-fields'
import { dokumentkrav } from './soknad/dokumentkrav'
import { dokumentkravSvar } from './soknad/dokumentkrav-svar'
import { produktsideSchemas } from './produktside/schema'

export const schemaTypes = [
  ...produktsideSchemas,
  seksjon,
  faktum,
  svaralternativ,
  landgruppe,
  infopage,
  appText,
  navIconPicker,
  alertTextField,
  dokumentkrav,
  dokumentkravSvar,
  timeline,
  timelineElement,
  readMoreField,
]
