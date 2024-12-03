import { defineField, defineType } from 'sanity'
import { languageField } from '../common-fields'

export const produktsideHeader = defineType({
  readOnly: true,
  name: 'produktsideHeader',
  title: 'Header for Produktside Dagpenger',
  type: 'document',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
    }),
    defineField({
      name: 'leftSubtitle',
      title: 'Venstre subtittel',
      type: 'string',
    }),
    defineField({
      name: 'rightSubtitle',
      title: 'Høyre subtittel',
      type: 'string',
    }),
  ],
})
