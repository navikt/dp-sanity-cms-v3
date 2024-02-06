import {
  descriptionTextField,
  helpTextField,
  questionTextField,
  errorMessageTextField,
  textIdField,
  unitField,
  alertTextField,
} from './common-fields'
import { defineType } from 'sanity'

export const faktum = defineType({
  type: 'document',
  name: 'faktum',
  title: 'Spørsmål',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [
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
