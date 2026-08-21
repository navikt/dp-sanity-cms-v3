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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ageLabel',
      title: 'Alder',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'genderLabel',
      title: 'Kjønn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'citizenshipLabel',
      title: 'Statsborgerskap',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'historyButton',
      title: 'Historikk-knapp',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'createReportCardButton',
      title: 'Opprett meldekort-knapp',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'description',
          title: 'Beskrivelse',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
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
