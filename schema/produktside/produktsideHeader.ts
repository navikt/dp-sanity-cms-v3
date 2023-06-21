import { defineField, defineType } from 'sanity'

export const produktsideHeader = defineType({
  name: 'produktsideHeader',
  title: 'Header for Produktside Dagpenger',
  type: 'document',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [
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
