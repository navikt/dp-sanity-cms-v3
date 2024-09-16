import { defineType } from 'sanity'
import { textIdField, valueTextField } from './common-fields'
import { languageField } from '../common-fields'

export const appText = defineType({
  type: 'document',
  name: 'apptekst',
  title: 'Generelle tekster',
  initialValue: {
    language: 'nb',
  },
  fields: [languageField, textIdField, valueTextField],
  preview: {
    select: {
      title: textIdField.name,
      subtitle: valueTextField.name,
    },
  },
})
