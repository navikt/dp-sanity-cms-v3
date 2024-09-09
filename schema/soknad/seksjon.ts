import {
  descriptionTextField,
  helpTextField,
  sectionTitleField,
  textIdField,
} from './common-fields'
import { defineType } from 'sanity'
import { languageField } from '../common-fields'

export const seksjon = defineType({
  type: 'document',
  name: 'seksjon',
  title: 'Seksjon',
  initialValue: {
    language: 'nb',
  },
  fields: [languageField, textIdField, sectionTitleField, descriptionTextField, helpTextField],
  preview: {
    select: {
      title: sectionTitleField.name,
      subtitle: textIdField.name,
    },
  },
})
