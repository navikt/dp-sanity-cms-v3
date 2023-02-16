import { alertTextField, textIdField } from './common-fields'
import { defineType } from 'sanity'

export const landgruppe = defineType({
  type: 'document',
  name: 'landgruppe',
  title: 'Landgruppe',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [textIdField, alertTextField],
  preview: {
    select: {
      title: alertTextField.title || 'Untitled',
      subtitle: textIdField.name,
    },
  },
})
