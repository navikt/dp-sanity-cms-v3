import { defineField, defineType } from 'sanity'
import { richTextField, stringField } from './felles/translated-fields'

export const meldekortBrukerflateOversikt = defineType({
  name: 'meldekortBrukerflateOversikt',
  title: 'Oversikt over innsendte meldekort',
  type: 'document',
  groups: [
    { name: 'oversikt', title: 'Oversikt', default: true },
    { name: 'meldekortstatus', title: 'Meldekortstatus' },
  ],
  fields: [
    defineField({
      name: 'tittel',
      title: 'Tittel på siden',
      type: 'internationalizedArrayString',
      description: 'Vises som sidetittel på oversikten.',
      validation: (Rule) => Rule.required(),
      group: 'oversikt',
    }),
    richTextField('tekst', 'Tekst på siden', 'oversikt'),
    defineField({
      name: 'meldekortstatus',
      title: 'Meldekortstatus',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'meldekortstatus',
      fields: [
        stringField('innsendt', 'Innsendt'),
        stringField('ferdigBehandlet', 'Ferdig behandlet'),
        stringField('feilVedBehandling', 'Feil ved behandling'),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Oversikt over innsendte meldekort' }
    },
  },
})
