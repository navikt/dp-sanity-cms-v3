import { meldekortHeader } from './header'
import { meldekortPersonlinje } from './personlinje'
import { meldekortAktiviteter } from './aktiviteter'
import { meldekortStatuser } from './statuser'
import { meldekortAktivitetsTabell } from './aktivitetsTabell'
import { meldekortKalender } from './kalender'
import { meldekortVarsler } from './varsler'

export const fellesSchemas = [
  meldekortHeader,
  meldekortPersonlinje,
  meldekortAktiviteter,
  meldekortStatuser,
  meldekortAktivitetsTabell,
  meldekortKalender,
  meldekortVarsler,
]
