import { defineType } from 'sanity'
import { stringField } from './translated-fields'

export const meldekortBrukerflateGrunntekster = defineType({
  name: 'meldekortBrukerflateGrunntekster',
  title: 'Meldekort brukerflate - grunntekster',
  type: 'document',
  groups: [{ name: 'grunntekster', title: 'Grunntekster', default: true }],
  fields: [
    stringField('sidetittel', 'Tittel som vises øverst i brukerflaten'),
    stringField('minSide', 'Tittel for Min side i breadcrumbs'),
    stringField('meldekort', 'Tittel for Meldekort i breadcrumbs'),
    stringField('innsendteMeldekort', 'Tittel for innsendte meldekort i breadcrumbs'),
    stringField('uke', 'Uke'),
  ],
  preview: {
    prepare() {
      return { title: 'Grunntekster' }
    },
  },
})
