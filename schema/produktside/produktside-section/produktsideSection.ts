import { MdWeb } from 'react-icons/md'
import { defineField, defineType } from 'sanity'
import { produktsideSectionRichText } from './produktsideSectionRichText'

export const produktsideSection = defineType({
  name: 'produktsideSection',
  type: 'document',
  title: 'Produktside innholdsseksjoner',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  icon: MdWeb,
  fields: [
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
