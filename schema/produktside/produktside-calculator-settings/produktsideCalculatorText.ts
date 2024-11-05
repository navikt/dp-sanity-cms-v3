import { defineField, defineType } from 'sanity'
import { languageField } from '../../common-fields'

export const produktsideCalculatorText = defineType({
  type: 'document',
  name: 'produktsideCalculatorText',
  title: 'Kalkulator tekster',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    defineField({
      type: 'string',
      name: 'textId',
      title: 'Tekstnøkkel',
      readOnly: true,
    }),
    defineField({
      type: 'produktsideCalculatorRichTextPlain',
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
