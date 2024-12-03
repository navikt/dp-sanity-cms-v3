import { MdContactSupport } from 'react-icons/md'
import { defineField, defineType } from 'sanity'
import { produktsideSectionRichText } from './produktside-section/produktsideSectionRichText'
import { languageField } from '../common-fields'

export const produktsideContactOptions = defineType({
  readOnly: true,
  name: 'produktsideContactOptions',
  type: 'document',
  title: 'Produktside kontaktalternativer',
  icon: MdContactSupport,
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    defineField({
      name: 'title',
      type: 'string',
      title: 'Hovedtittel',
      validation: (Rule) => Rule.required().error('Tittel er påkrevd.'),
    }),
    defineField({
      name: 'chatTitle',
      type: 'string',
      title: 'Chat: Tittel',
      validation: (Rule) => Rule.required().error('Tittel er påkrevd.'),
    }),
    defineField({
      name: 'chatContent',
      type: produktsideSectionRichText.name,
      title: 'Chat: Innhold',
    }),
    defineField({
      name: 'writeTitle',
      type: 'string',
      title: 'Skriv: Tittel',
      validation: (Rule) => Rule.required().error('Tittel er påkrevd.'),
    }),
    defineField({
      name: 'writeURL',
      type: 'url',
      title: 'Skriv: URL',
      validation: (Rule) => Rule.required().error('URL er påkrevd.'),
    }),
    defineField({
      name: 'writeContent',
      title: 'Skriv: Innhold',
      type: produktsideSectionRichText.name,
    }),
    defineField({
      name: 'callTitle',
      type: 'string',
      title: 'Telefon: Tittel',
      validation: (Rule) => Rule.required().error('Tittel er påkrevd.'),
    }),
    defineField({
      name: 'callURL',
      type: 'url',
      title: 'Telefon: URL',
      description: 'Formatet på telefon er slik: tel:+01-562-867-5309',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['tel'],
        }),
    }),
    defineField({
      name: 'callContent',
      type: produktsideSectionRichText.name,
      title: 'Telefon: Innhold',
    }),
  ],
})
