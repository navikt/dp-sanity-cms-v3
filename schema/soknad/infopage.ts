import { timeline } from './timeline'
import { alertTextField, readMoreField, textIdField } from './common-fields'
import { defineField, defineType } from 'sanity'
import { languageField } from '../common-fields'

export const infopage = defineType({
  type: 'document',
  name: 'infopage',
  title: 'Infoside',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    textIdField,
    defineField({
      type: 'array',
      name: 'body',
      title: 'Innhold',
      of: [
        {
          type: 'block',
        },
        { type: timeline.name },
        { type: alertTextField.name },
        { type: readMoreField.name },
      ],
    }),
  ],
  preview: {
    select: {
      title: textIdField.name,
    },
  },
})
