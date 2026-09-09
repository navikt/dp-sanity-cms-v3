import { defineType } from 'sanity'
import { stringField } from './translated-fields'

export const meldekortBrukerflateMeldekortdetaljer = defineType({
  name: 'meldekortBrukerflateMeldekortdetaljer',
  title: 'Meldekort brukerflate - meldekortdetaljer',
  type: 'document',
  groups: [{ name: 'meldekortdetaljer', title: 'Meldekortdetaljer', default: true }],
  fields: [
    stringField('tittel', 'Tittel på meldekortdetaljer'),
    stringField('sendt', 'Sendt'),
    stringField('endret', 'Endret'),
    stringField('belopUtbetalt', 'Beløp utbetalt'),
    stringField('oppsummering', 'Oppsummering'),
  ],
  preview: {
    prepare() {
      return { title: 'Meldekort brukerflate - meldekortdetaljer' }
    },
  },
})
