import { meldekortHeader } from './header'
import { meldekortPersonlinje } from './personlinje'
import { meldekortAktiviteter } from './aktiviteter'
import { meldekortStatuser } from './statuser'
import { meldekortFyllUtTabell } from './fyllUtTabell'
import { meldekortKalender } from './kalender'
import { meldekortVarsler } from './varsler'

export const fellesSchemas = [
  meldekortHeader,
  meldekortPersonlinje,
  meldekortAktiviteter,
  meldekortStatuser,
  meldekortFyllUtTabell,
  meldekortKalender,
  meldekortVarsler,
]
