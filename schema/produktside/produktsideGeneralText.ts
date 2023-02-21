import { defineField, defineType } from 'sanity'

export const produktsideGeneralText = defineType({
  type: 'document',
  name: 'produktsideGeneralText',
  title: 'Produktside generelle tekster',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [
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
