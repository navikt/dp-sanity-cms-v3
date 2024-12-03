import { defineField, defineType } from 'sanity'

export const produktsideFilterMenu = defineType({
  readOnly: true,
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
