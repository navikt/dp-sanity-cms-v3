import { defineField, defineType } from 'sanity'

export const produktsideAccordionWithRichText = defineType({
  readOnly: true,
  name: 'produktsideAccordionWithRichText',
  title: 'AccordionNY',
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
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: `(Accordion NY) ${title}`,
      }
    },
  },
})
