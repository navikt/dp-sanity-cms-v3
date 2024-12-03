import { MdWeb } from 'react-icons/md'
import { defineField, defineType } from 'sanity'
import { produktsideSectionRichText } from './produktsideSectionRichText'
import { languageField } from '../../common-fields'

export const produktsideSection = defineType({
  readOnly: true,
  name: 'produktsideSection',
  type: 'document',
  title: 'Produktside innholdsseksjoner',
  icon: MdWeb,
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    defineField({
      type: 'navIconPicker',
      name: 'iconName',
      title: 'Ikon',
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tittel',
      validation: (Rule) => Rule.required().error('Tittel er påkrevd.'),
    }),
    defineField({
      name: 'key',
      type: 'string',
      title: 'Seksjonsnøkkel',
      hidden: true,
      readOnly: true,
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Ankerlenke for innholdsseksjonen',
      description:
        'Velg en god ankerlenke. Hvis den må endres i ettertid vil dette knekke lenker som går til denne siden.',
      validation: (Rule) => Rule.required().error('Ankerlenke er påkrevd med maks 96 tegn'),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      title: 'Innhold',
      name: 'content',
      type: produktsideSectionRichText.name,
    }),
  ],
})
