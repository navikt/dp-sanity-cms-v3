import { descriptionTextField, helpTextField, textIdField, titleTextField } from './common-fields'
import { defineType } from 'sanity'

export const dokumentkrav = defineType({
  type: 'document',
  name: 'dokumentkrav',
  title: 'Dokumentkrav',
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: 'nb',
  },
  fields: [textIdField, titleTextField, descriptionTextField, helpTextField],
  preview: {
    select: {
      title: titleTextField.name,
      subtitle: textIdField.name,
    },
  },
})
