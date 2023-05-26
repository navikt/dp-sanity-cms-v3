import { textIdField, valueTextField } from '../soknad/common-fields'
import { defineType } from 'sanity'

export const mineDagpengerAppText = defineType({
  type: 'document',
  name: 'mineDagpengerAppText',
  title: 'Mine dagpenger generelle tekster',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [textIdField, valueTextField],
  preview: {
    select: {
      title: textIdField.name,
      subtitle: valueTextField.name,
    },
  },
})
