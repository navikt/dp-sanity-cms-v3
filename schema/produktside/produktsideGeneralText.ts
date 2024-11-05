import { defineField, defineType } from 'sanity'
import { languageField } from '../common-fields'

export const produktsideGeneralText = defineType({
  type: 'document',
  name: 'produktsideGeneralText',
  title: 'Produktside generelle tekster',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    defineField({
      type: 'string',
      name: 'textId',
      title: 'Tekstnøkkel',
      readOnly: false, //Skal være true senere,
    }),
    defineField({
      type: 'string',
      name: 'textValue',
      title: 'Verdi',
    }),
  ],
  preview: {
    select: {
      title: 'textId',
      subtitle: 'textValue',
    },
  },
})
