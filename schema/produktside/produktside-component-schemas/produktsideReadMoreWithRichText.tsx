import { defineField, defineType } from 'sanity'

export const produktsideReadMoreWithRichText = defineType({
  readOnly: true,
  name: 'produktsideReadMoreWithRichText',
  title: 'ReadMore NY',
  type: 'object',
  fields: [
    defineField({
      title: 'Tittel',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Tittel er påkrevd.'),
    }),
    defineField({
      title: 'Innhold',
      name: 'content',
      type: 'produktsideComponentRichText',
      validation: (Rule) => Rule.required().error('Innhold er påkrevd.'),
    }),
    defineField({
      title: 'Størrelse',
      name: 'size',
      type: 'string',
      initialValue: 'medium',
      options: {
        list: [
          { title: 'small', value: 'small' },
          { title: 'medium', value: 'medium' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `(ReadMore NY) ${title}`,
      }
    },
  },
})
