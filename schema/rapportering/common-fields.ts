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
        list: [
          { title: 'Penger', value: 'penger' },
          { title: 'Dato', value: 'dato' },
          { title: 'Heltall', value: 'heltall' },
          { title: 'Desimaltall', value: 'desimaltall' },
          { title: 'Grunnbeløp', value: 'grunnbelop' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: textIdField.name,
    },
  },
})
