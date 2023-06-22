import { defineArrayMember, defineField, defineType } from 'sanity'
import { produktsideRichText } from './produktsideRichText'

export const produktsideSettings = defineType({
  name: 'produktsideSettings',
  title: 'Venstremeny for Produktside Dagpenger',
  type: 'document',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tittel',
    }),
    defineField({
      name: 'content',
      type: produktsideRichText.name,
      title: 'Innhold',
    }),
    defineField({
      name: 'supportLinksTitle',
      type: 'string',
      title: 'Tittel for støttelenker',
    }),
    defineField({
      name: 'supportLinks',
      type: 'array',
      title: 'Innhold for støttelenker',
      description:
        'Lenker til andre sider med støtteinformasjon, for eksempel inngang til lovtekst om produktet eller sentral klageinformasjon. Lenkemenyen kan brukes til å lenke til denne typen tilleggsinformasjon som ikke er dekket på produktsiden.',
      of: [
        defineArrayMember({
          title: 'Lenkemeny',
          type: 'object',
          fields: [
            defineField({
              title: 'Tittel',
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              title: 'URL',
              name: 'url',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              title: 'Åpne i ny fane',
              name: 'targetBlank',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        }),
      ],
    }),
  ],
})
