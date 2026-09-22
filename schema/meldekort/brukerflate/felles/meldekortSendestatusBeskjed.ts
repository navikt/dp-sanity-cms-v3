import { defineType } from 'sanity'
import { stringField } from './translated-fields'

export const MeldekortInnsendingsstatusBeskjed = defineType({
  name: 'meldekortInnsendingsstatusBeskjed',
  title: 'Beskjed som gis om meldekortet kan sendes inn eller ikke',
  type: 'document',
  fields: [
    stringField('ikkeSendtInnEnda', 'Beskjed om at meldekortet ikke er sendt inn enda'),
    stringField('endringerIkkeSendtInnEnda', 'Beskjed om at endringer ikke er sendt inn enda'),
    stringField('kanIkkeSendesInn', 'Beskjed om at meldekortet ikke kan sendes inn'),
    stringField('sendtInn', 'Beskjed om at meldekortet er sendt inn'),
    stringField('sendtInnEndringer', 'Beskjed om at endringer av meldekortet er sendt inn'),
  ],
  preview: {
    prepare() {
      return { title: 'Beskjeder om et meldekort kan sendes inn' }
    },
  },
})
