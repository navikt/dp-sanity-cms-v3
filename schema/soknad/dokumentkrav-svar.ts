import { alertTextField, answerTextField, textIdField } from './common-fields'
import { defineType } from 'sanity'

export const dokumentkravSvar = defineType({
  type: 'document',
  name: 'dokumentkravSvar',
  title: 'Dokumentkrav svar',
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: 'nb',
  },
  fields: [textIdField, answerTextField, alertTextField],
  preview: {
    select: {
      title: answerTextField.name,
      subtitle: textIdField.name,
    },
  },
})
