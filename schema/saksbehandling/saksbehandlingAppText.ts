import { textIdField, valueTextField } from '../soknad/common-fields'
import { defineType } from 'sanity'
import { languageField } from '../common-fields'

export const saksbehandlingAppText = defineType({
  type: 'document',
  name: 'saksbehandlingAppText',
  title: 'Saksbehandling generelle tekster',
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
