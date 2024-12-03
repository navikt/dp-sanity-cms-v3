import { defineField, defineType } from 'sanity'
import { produktsideSectionRichText } from './produktside-section/produktsideSectionRichText'
import { languageField } from '../common-fields'

export const produktsideTopContent = defineType({
  readOnly: true,
  name: 'produktsideTopContent',
  type: 'document',
  title: 'Produktside øverste innhold',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    defineField({
      name: 'content',
      title: 'Innhold',
      type: produktsideSectionRichText.name,
    }),
  ],
})
