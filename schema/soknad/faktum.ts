import {
  alertTextField,
  descriptionTextField,
  errorMessageTextField,
  helpTextField,
  questionTextField,
  textIdField,
  unitField,
} from './common-fields'
import { defineType } from 'sanity'
import { languageField } from '../common-fields'

export const faktum = defineType({
  type: 'document',
  name: 'faktum',
  title: 'Spørsmål',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    textIdField,
    questionTextField,
    descriptionTextField,
    errorMessageTextField,
    helpTextField,
    unitField,
    alertTextField,
  ],
  preview: {
    select: {
      title: questionTextField.name,
      subtitle: textIdField.name,
    },
  },
})
