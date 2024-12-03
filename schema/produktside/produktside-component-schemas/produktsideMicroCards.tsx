import { defineField, defineType, defineArrayMember } from 'sanity'

export const produktsideMicroCards = defineType({
  readOnly: true,
  name: 'produktsideMicroCards',
  title: 'Mikrokort',
  type: 'object',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Tittel' }),
    defineField({
      name: 'cardList',
      type: 'array',
      title: 'Mikrokort-lenker',
      description: 'Mikrokort-lenker til andre relavante sider.',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          title: 'Mikrokort-lenker',
          type: 'object',
          fields: [
            defineField({
              title: 'Lenketekst',
              name: 'linkText',
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
              title: 'Type',
              name: 'type',
              type: 'string',
              initialValue: 'situation',
              validation: (Rule) => Rule.required(),
              options: {
                list: [
                  { title: 'Product', value: 'product' },
                  { title: 'Situation', value: 'situation' },
                  { title: 'Tool', value: 'tool' },
                  { title: 'ThemedArticle', value: 'themed-article' },
                  { title: 'Guide', value: 'guide' },
                  { title: 'Overview', value: 'overview' },
                  { title: 'Generic', value: 'generic' },
                ], // <-- Denne tilsvarer enum CardType i dp-produktside-frontend
              },
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `(Mikrokort) ${title ?? ''}`,
      }
    },
  },
})
