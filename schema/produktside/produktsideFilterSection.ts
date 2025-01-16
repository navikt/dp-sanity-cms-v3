import { MdFilter } from 'react-icons/md'
import { defineField, defineType } from 'sanity'
import { produktsideSectionRichText } from './produktside-section/produktsideSectionRichText'
import { languageField } from '../common-fields'

export const produktsideFilterSection = defineType({
  name: 'produktsideFilterSection',
  type: 'document',
  title: 'Produktside filter seksjon',
  icon: MdFilter,
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tittel',
      validation: (Rule) => Rule.required().error('Tittel er påkrevd.'),
    }),
    defineField({
      name: 'content',
      title: 'Innhold',
      type: produktsideSectionRichText.name,
    }),
    defineField({
      name: 'filterLabel',
      title: 'Label for filtermeny i filterseksjonen',
      type: 'string',
      validation: (Rule) => Rule.required().error('Label for filtermeny er påkrevd.'),
    }),
  ],
})
