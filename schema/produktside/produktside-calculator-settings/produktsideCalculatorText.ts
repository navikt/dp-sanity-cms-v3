import { defineField, defineType } from 'sanity'

export const produktsideCalculatorText = defineType({
  type: 'document',
  name: 'produktsideCalculatorText',
  title: 'Kalkulator tekster',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [
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
