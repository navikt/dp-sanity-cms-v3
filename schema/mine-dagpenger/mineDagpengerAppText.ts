import { textIdField, valueTextField } from '../soknad/common-fields'
import { defineType } from 'sanity'
import { languageField } from '../common-fields'

export const mineDagpengerAppText = defineType({
  type: 'document',
  name: 'mineDagpengerAppText',
  title: 'Mine dagpenger generelle tekster',
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
