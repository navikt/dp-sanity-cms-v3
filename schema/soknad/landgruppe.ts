import { alertTextField, textIdField } from './common-fields'
import { defineType } from 'sanity'
import { languageField } from '../common-fields'

export const landgruppe = defineType({
  type: 'document',
  name: 'landgruppe',
  title: 'Landgruppe',
  initialValue: {
    language: 'nb',
  },
  fields: [languageField, textIdField, alertTextField],
  preview: {
    select: {
      title: alertTextField.title || 'Untitled',
      subtitle: textIdField.name,
    },
  },
})
