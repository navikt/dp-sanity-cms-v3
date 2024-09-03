import { defineType } from 'sanity'
import { textIdField } from '../soknad/common-fields'

export const dynamicField = defineType({
  type: 'document',
  name: 'dynamicField',
  title: 'Dynamisk felt',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [
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
