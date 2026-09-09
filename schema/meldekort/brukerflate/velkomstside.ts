import { defineField, defineType } from 'sanity'
import { richTextField, stringField } from './felles/translated-fields'

const messageFields = (name: string, title: string, description: string) =>
  defineField({
    name,
    title,
    type: 'object',
    description,
    validation: (Rule) => Rule.required(),
    fields: [stringField('tittel', 'Tittel på meldingen'), richTextField('tekst', 'Meldingstekst')],
  })

export const meldekortBrukerflateVelkomstside = defineType({
  name: 'meldekortBrukerflateVelkomstside',
  title: 'Velkomstside',
  type: 'document',
  groups: [
    { name: 'velkomst', title: 'Velkomsttekst', default: true },
    { name: 'jobb', title: 'Informasjon om arbeid' },
    { name: 'innsendingsmulighet', title: 'Hva brukeren kan gjøre nå' },
  ],
  fields: [
    defineField({
      name: 'velkomstTekst',
      title: 'Ingress eller velkomsttekst',
      type: 'internationalizedArrayBlockContent',
      description: 'Teksten brukeren møter først på velkomstsiden.',
      validation: (Rule) => Rule.required(),
      options: { modal: 'popover' },
      group: 'velkomst',
    }),
    defineField({
      name: 'harDuFaattDegJobb',
      title: 'Informasjon om brukerens arbeidssituasjon',
      type: 'object',
      description:
        'Tittel og brødtekst som vises på velkomstsiden rundt spørsmålet «Har du fått deg jobb?».',
      validation: (Rule) => Rule.required(),
      group: 'jobb',
      fields: [
        stringField('tittel', 'Tittel på informasjonen'),
        richTextField('tekst', 'Brødtekst om arbeidssituasjonen'),
      ],
    }),
    defineField({
      name: 'innsendingsmulighet',
      title: 'Hva brukeren kan gjøre nå',
      type: 'object',
      description: 'Tekster som vises basert på om brukeren kan sende inn et meldekort nå.',
      validation: (Rule) => Rule.required(),
      group: 'innsendingsmulighet',
      fields: [
        messageFields(
          'klarTilInnsending',
          'Meldekort kan sendes inn',
          'Vises når brukeren har et meldekort som er klart til utfylling og innsending.',
        ),
        messageFields(
          'ingenMeldekort',
          'Ingen meldekort å sende inn',
          'Vises når brukeren ikke har et meldekort som kan fylles ut nå.',
        ),
        messageFields(
          'forTidlig',
          'For tidlig å sende inn meldekort',
          'Vises når brukeren må vente før neste meldekort kan fylles ut.',
        ),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Velkomstside' }
    },
  },
})
