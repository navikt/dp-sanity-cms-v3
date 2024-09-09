import { descriptionTextField, helpTextField, textIdField, titleTextField } from './common-fields'
import { defineType } from 'sanity'
import { languageField } from '../common-fields'

export const dokumentkrav = defineType({
  type: 'document',
  name: 'dokumentkrav',
  title: 'Dokumentkrav',
  initialValue: {
    language: 'nb',
  },
  fields: [languageField, textIdField, titleTextField, descriptionTextField, helpTextField],
  preview: {
    select: {
      title: titleTextField.name,
      subtitle: textIdField.name,
    },
  },
})
