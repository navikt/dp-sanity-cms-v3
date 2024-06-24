import { defineType } from 'sanity'
import { textIdField, unitField } from '../soknad/common-fields'

export const behandlingOpplysning = defineType({
  type: 'document',
  name: 'behandlingOpplysning',
  title: 'Opplysning',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [textIdField, unitField],
  preview: {
    select: {
      title: textIdField.name,
    },
  },
})
