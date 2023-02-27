import { MdFilter } from 'react-icons/md'
import { defineField, defineType } from 'sanity'
import { produktsideSectionRichText } from './produktsideSection/produktsideSectionRichText'

export const produktsideFilterSection = defineType({
  name: 'produktsideFilterSection',
  type: 'document',
  title: 'Produktside filter seksjon',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  icon: MdFilter,
  fields: [
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
