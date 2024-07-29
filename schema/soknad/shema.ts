import { appText } from './appText'
import { alertTextField, readMoreField } from './common-fields'
import { dokumentkrav } from './dokumentkrav'
import { faktum } from './faktum'
import { infopage } from './infopage'
import { landgruppe } from './landgruppe'
import { seksjon } from './seksjon'
import { svaralternativ } from './svaralternativ'
import { dokumentkravSvar } from './dokumentkrav-svar'
import { navIconPicker, timeline, timelineElement } from './timeline'

export const soknadSchemas = [
  seksjon,
  faktum,
  svaralternativ,
  landgruppe,
  infopage,
  appText,
  dokumentkrav,
  dokumentkravSvar,
  navIconPicker,
  timeline,
  timelineElement,
  alertTextField,
  readMoreField,
]
