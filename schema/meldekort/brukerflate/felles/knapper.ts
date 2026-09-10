import { defineType } from 'sanity'
import { stringField } from './translated-fields'

export const meldekortBrukerflateKnapper = defineType({
  name: 'meldekortBrukerflateKnapper',
  title: 'Meldekort brukerflate - knapper',
  type: 'document',
  groups: [{ name: 'knapper', title: 'Knapper', default: true }],
  fields: [
    stringField('neste', 'Neste'),
    stringField('tilbake', 'Tilbake'),
    stringField('gaaTilNesteMeldekort', 'Gå til neste meldekort'),
    stringField('seOgEndreInnsendteMeldekort', 'Se og endre innsendte meldekort'),
    stringField('gaaTilMinSide', 'Gå til Min side'),
    stringField('avbryt', 'Avbryt'),
    stringField('sendInn', 'Send inn'),
    stringField('sendEndring', 'Send endring'),
  ],
  preview: {
    prepare() {
      return { title: 'Meldekort brukerflate - knapper' }
    },
  },
})
