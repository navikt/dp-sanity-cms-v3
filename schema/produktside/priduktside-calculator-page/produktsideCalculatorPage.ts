import { MdWeb } from 'react-icons/md'
import { defineField, defineType } from 'sanity'
import { produktsideSectionRichText } from '../produktside-section/produktsideSectionRichText'

export const produktsideCalculatorPage = defineType({
  name: 'produktsideCalculatorPage',
  type: 'document',
  title: 'Produktside kalkulator side',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  icon: MdWeb,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tittel',
      validation: (Rule) => Rule.required().error('Tittel er påkrevd.'),
    }),
    defineField({
      name: 'subtitle',
      type: 'string',
      title: 'Undertittel',
      validation: (Rule) => Rule.required().error('Undertittel er påkrevd.'),
    }),
    defineField({
      title: 'Innhold',
      name: 'content',
      type: produktsideSectionRichText.name,
    }),
  ],
})
