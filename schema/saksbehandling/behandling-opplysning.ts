import { defineType } from 'sanity'
import { textIdField } from '../soknad/common-fields'

export const behandlingOpplysning = defineType({
  type: 'document',
  name: 'behandlingOpplysning',
  title: 'Opplysning',
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
