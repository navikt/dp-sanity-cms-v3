import { defineField, defineType } from 'sanity'

export const produktsideAccordionList = defineType({
  readOnly: true,
  name: 'produktsideAccordionList',
  title: 'AccordionList',
  type: 'object',
  fields: [
    defineField({
      title: 'Innhold',
      name: 'content',
      type: 'produktsideComponentRichText',
      validation: (Rule) => Rule.required().error('Innhold er påkrevd.'),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: `AccordionList`,
      }
    },
  },
})
