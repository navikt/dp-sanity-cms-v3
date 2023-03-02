import { defineField, defineType } from 'sanity'

export const produktsideCalculator = defineType({
  name: 'produktsideCalculator',
  title: 'Produktside Kalkulator',
  type: 'object',
  fields: [
    defineField({
      name: 'hiddenField',
      type: 'string',
      hidden: true,
      initialValue: 'Kalkulator',
    }),
  ],
  preview: {
    select: {
      title: 'hiddenField',
    },
    prepare({ title }) {
      return {
        title: `(${title})`,
      }
    },
  },
})
