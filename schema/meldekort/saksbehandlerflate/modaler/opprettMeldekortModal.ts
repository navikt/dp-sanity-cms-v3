import { defineField, defineType } from 'sanity'

export const opprettMeldekortModal = defineType({
  name: 'opprettMeldekortModal',
  title: 'Opprett meldekort-modal',
  type: 'document',
  groups: [
    { name: 'generelt', title: 'Generelt', default: true },
    { name: 'skjema', title: 'Skjema' },
    { name: 'knapper', title: 'Knapper' },
    { name: 'feilmeldinger', title: 'Feilmeldinger' },
  ],
  fields: [
    defineField({
      name: 'tittel',
      title: 'Tittel',
      type: 'string',
      description: 'F.eks. "Opprett meldekort" eller "Opprett nye meldekort for {{navn}}"',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
    }),
    defineField({
      name: 'fraDato',
      title: 'Fra-dato',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'skjema',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'helpText',
          title: 'Hjelpetekst',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'tilDato',
      title: 'Til-dato',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'skjema',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'helpText',
          title: 'Hjelpetekst',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'forklaringstekst',
      title: 'Forklaringstekst',
      type: 'string',
      description:
        'Bruk {{antall}} for antall meldekort. F.eks. "Basert på valgt dato, vil det opprettes {{antall}} nye meldekort."',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
    }),
    defineField({
      name: 'submitKnapp',
      title: 'Bekreft-knapp',
      type: 'string',
      description: 'F.eks. "Opprett"',
      validation: (Rule) => Rule.required(),
      group: 'knapper',
    }),
    defineField({
      name: 'avbrytKnapp',
      title: 'Avbryt-knapp',
      type: 'string',
      description: 'F.eks. "Avbryt"',
      validation: (Rule) => Rule.required(),
      group: 'knapper',
    }),
    defineField({
      name: 'infoBoks',
      title: 'Informasjonsboks',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
      fields: [
        defineField({
          name: 'tittel',
          title: 'Tittel',
          type: 'string',
          description: 'F.eks. "Info om meldekortsyklus"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'tekst',
          title: 'Tekst',
          type: 'string',
          description:
            'F.eks. "Nye meldekort opprettes i samme syklus som den bruker allerede har..."',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'feilmelding',
      title: 'Feilmelding',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'feilmeldinger',
      fields: [
        defineField({
          name: 'tittel',
          title: 'Tittel',
          type: 'string',
          description: 'F.eks. "Kunne ikke opprette meldekort"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'tekst',
          title: 'Tekst',
          type: 'string',
          description: 'F.eks. "Noe gikk galt ved opprettelse av meldekort. Prøv igjen senere."',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Opprett meldekort-modal',
      }
    },
  },
})
