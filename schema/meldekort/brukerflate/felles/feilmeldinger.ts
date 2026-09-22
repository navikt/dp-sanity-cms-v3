import { defineField, defineType } from 'sanity'
import { richTextField, stringField } from './translated-fields'

export const meldekortBrukerflateFeilmeldinger = defineType({
  name: 'meldekortBrukerflateFeilmeldinger',
  title: 'Meldekort brukerflate - feilmeldinger',
  type: 'document',
  groups: [{ name: 'generellFeil', title: 'Generell feil', default: true }],
  fields: [
    defineField({
      name: 'generellFeil',
      title: 'Generell feil',
      type: 'object',
      description: 'Melding som vises når noe går galt på brukerflaten.',
      validation: (Rule) => Rule.required(),
      group: 'generellFeil',
      fields: [
        stringField('tittel', 'Tittel på feilmeldingen'),
        richTextField('tekst', 'Tekst i feilmeldingen'),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Feilmeldinger' }
    },
  },
})
