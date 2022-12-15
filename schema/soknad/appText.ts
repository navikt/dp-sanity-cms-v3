import { defineType } from 'sanity'
import { textIdField, valueTextField } from './common-fields'

export const appText = defineType({
  type: 'document',
  name: 'apptekst',
  title: 'Generelle tekster',
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
