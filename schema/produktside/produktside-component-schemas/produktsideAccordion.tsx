import { defineField, defineType } from 'sanity'

export const produktsideAccordion = defineType({
  name: 'produktsideAccordion',
  title: 'Accordion',
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
      type: 'text',
      validation: (Rule) => Rule.required().error('Innhold er påkrevd.'),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'content',
    },
    prepare({ title, subtitle }) {
      return {
        title: `(Accordion) ${title}`,
        subtitle,
      }
    },
  },
})
