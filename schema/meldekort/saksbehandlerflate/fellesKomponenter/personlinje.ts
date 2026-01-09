import { defineField, defineType } from 'sanity'

export const meldekortPersonlinje = defineType({
  name: 'meldekortPersonlinje',
  title: 'Personlinje',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionAriaLabel',
      title: 'Beskrivelse av personlinjen (skjermleser)',
      type: 'string',
      description:
        'Hjelpetekst for skjermlesere som beskriver personlinjen. F.eks. "Informasjon om valgt person"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'birthNumberLabel',
      title: 'Fødselsnummer',
      type: 'string',
      description: 'Tekst foran fødselsnummer. F.eks. "Fødselsnummer:"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ageLabel',
      title: 'Alder',
      type: 'string',
      description: 'Tekst foran alder. F.eks. "Alder:"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'genderLabel',
      title: 'Kjønn',
      type: 'string',
      description: 'Tekst foran kjønn. F.eks. "Kjønn:"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'citizenshipLabel',
      title: 'Statsborgerskap',
      type: 'string',
      description: 'Tekst foran statsborgerskap. F.eks. "Statsborgerskap:"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'historyButton',
      title: 'Historikk-knapp',
      type: 'string',
      description: 'Tekst på historikk-knappen. F.eks. "Historikk"',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Personlinje',
      }
    },
  },
})
