import { MdWeb } from 'react-icons/md'
import { defineField, defineType } from 'sanity'
import { produktsideSectionRichText } from '../produktside-section/produktsideSectionRichText'
import { languageField } from '../../common-fields'

export const produktsideCalculatorPage = defineType({
  name: 'produktsideCalculatorPage',
  type: 'document',
  title: 'Produktside kalkulator side',
  icon: MdWeb,
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    defineField({
      name: 'title',
      title: 'Tittel',
      type: 'string',
      validation: (Rule) => Rule.required().error('Tittel er påkrevd.'),
    }),
    defineField({
      name: 'subtitle',
      title: 'Undertittel',
      type: 'string',
      validation: (Rule) => Rule.required().error('Undertittel er påkrevd.'),
    }),
    defineField({
      name: 'content',
      title: 'Innhold',
      type: produktsideSectionRichText.name,
    }),
    defineField({
      name: 'seo',
      title: 'Søkemotoroptimalisering',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Tittel',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Beskrivelse',
          type: 'string',
        },
        {
          name: 'image',
          type: 'image',
          title: 'Bilde',
          fields: [
            {
              name: 'imageAltText',
              type: 'string',
              title: 'Alternativ tekst',
              description: 'Teksten bør beskrive bildet hvis det inneholder informasjon.',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'dagpengerLink',
      title: 'Dagpenger lenke',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Lenketekst',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Beskrivelse',
          type: 'string',
        },
        {
          name: 'link',
          title: 'Lenke',
          type: 'string',
        },
      ],
    }),
  ],
})
