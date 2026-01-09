import { defineField, defineType } from 'sanity'

export const meldekortHeader = defineType({
  name: 'meldekortHeader',
  title: 'Header',
  type: 'document',
  groups: [
    { name: 'navigation', title: 'Navigasjon', default: true },
    { name: 'userMenu', title: 'Brukermeny' },
    { name: 'theme', title: 'Tema' },
  ],
  fields: [
    defineField({
      name: 'skipLink',
      title: 'Skip link',
      type: 'string',
      description: 'Tekst for lenken som hopper til hovedinnhold.',
      validation: (Rule) => Rule.required(),
      group: 'navigation',
    }),
    defineField({
      name: 'systemHeaderAriaLabel',
      title: 'System header aria-label',
      type: 'string',
      description: 'Aria-label for systemheaderen.',
      validation: (Rule) => Rule.required(),
      group: 'navigation',
    }),
    defineField({
      name: 'homeLink',
      title: 'Hjemlenke tekst',
      type: 'string',
      description: 'Tekst på lenken til forsiden.',
      validation: (Rule) => Rule.required(),
      group: 'navigation',
    }),
    defineField({
      name: 'homeLinkAriaLabel',
      title: 'Hjemlenke aria-label',
      type: 'string',
      description: 'Aria-label for hjemlenken.',
      validation: (Rule) => Rule.required(),
      group: 'navigation',
    }),
    defineField({
      name: 'userButtonAriaLabel',
      title: 'Brukerknapp aria-label',
      type: 'string',
      description:
        'Aria-label for brukerknappen. Bruker {{name}} som placeholder for brukerens navn.',
      validation: (Rule) => Rule.required(),
      group: 'userMenu',
    }),
    defineField({
      name: 'dropdownAriaLabel',
      title: 'Dropdown aria-label',
      type: 'string',
      description: 'Aria-label for dropdown-menyen.',
      validation: (Rule) => Rule.required(),
      group: 'userMenu',
    }),
    defineField({
      name: 'sensitiveDataSwitchLabel',
      title: 'Skjul sensitive opplysninger - label',
      type: 'string',
      description: 'Label for switch som skjuler sensitive opplysninger.',
      validation: (Rule) => Rule.required(),
      group: 'userMenu',
    }),
    defineField({
      name: 'sensitiveDataSwitchDescription',
      title: 'Skjul sensitive opplysninger - beskrivelse',
      type: 'string',
      description: 'Beskrivelse under switchen for sensitive opplysninger.',
      validation: (Rule) => Rule.required(),
      group: 'userMenu',
    }),
    defineField({
      name: 'logoutLinkText',
      title: 'Logg ut - tekst',
      type: 'string',
      description: 'Tekst på logg ut-lenken.',
      validation: (Rule) => Rule.required(),
      group: 'userMenu',
    }),
    defineField({
      name: 'darkThemeActive',
      title: 'Mørkt tema aktivert',
      type: 'string',
      description: 'Aria-label når mørkt tema er aktivert.',
      validation: (Rule) => Rule.required(),
      group: 'theme',
    }),
    defineField({
      name: 'lightThemeActive',
      title: 'Lyst tema aktivert',
      type: 'string',
      description: 'Aria-label når lyst tema er aktivert.',
      validation: (Rule) => Rule.required(),
      group: 'theme',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header',
      }
    },
  },
})
