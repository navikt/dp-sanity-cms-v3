import { alertTextField, answerTextField, textIdField } from './common-fields'
import { defineType } from 'sanity'
import { languageField } from '../common-fields'

export const svaralternativ = defineType({
  type: 'document',
  name: 'svaralternativ',
  title: 'Svaralternativ',
  initialValue: {
    language: 'nb',
  },
  fields: [languageField, textIdField, answerTextField, alertTextField],
  preview: {
    select: {
      title: answerTextField.name,
      subtitle: textIdField.name,
    },
  },
})
