import { defineType } from 'sanity'
import { textIdField } from '../soknad/common-fields'
import { languageField } from '../common-fields'

export const dynamicField = defineType({
  type: 'document',
  name: 'dynamicField',
  title: 'Dynamisk felt',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    textIdField,
    {
      type: 'string',
      name: 'type',
      title: 'Datatype',
      options: {
        list: [{ title: 'Dato', value: 'dato' }],
      },
    },
  ],
  preview: {
    select: {
      title: textIdField.name,
    },
  },
})
