import {
  descriptionTextField,
  helpTextField,
  sectionTitleField,
  textIdField,
} from './common-fields'
import { defineType } from 'sanity'

export const seksjon = defineType({
  type: 'document',
  name: 'seksjon',
  title: 'Seksjon',
  i18n: true,
  initialValue: {
    // eslint-disable-next-line camelcase
    __i18n_lang: 'nb',
  },
  fields: [textIdField, sectionTitleField, descriptionTextField, helpTextField],
  preview: {
    select: {
      title: sectionTitleField.name,
      subtitle: textIdField.name,
    },
  },
})
