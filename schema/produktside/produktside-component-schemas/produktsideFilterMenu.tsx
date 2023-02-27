import { defineField, defineType } from 'sanity'

export const produktsideFilterMenu = defineType({
  name: 'produktsideFilterMenu',
  title: 'FilterMenu',
  type: 'object',
  fields: [
    defineField({ name: 'hiddenField', type: 'string', hidden: true, initialValue: 'FilterMenu' }),
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
