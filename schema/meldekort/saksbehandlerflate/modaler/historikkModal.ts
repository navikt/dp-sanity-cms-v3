import { defineField, defineType } from 'sanity'

export const meldekortHistorikkModal = defineType({
  name: 'meldekortHistorikkModal',
  title: 'Historikk-modal',
  type: 'document',
  groups: [
    { name: 'generelt', title: 'Generelt', default: true },
    { name: 'hendelser', title: 'Hendelser' },
    { name: 'feilmeldinger', title: 'Feilmeldinger' },
  ],
  fields: [
    defineField({
      name: 'overskrift',
      title: 'Overskrift',
      type: 'string',
      description: 'F.eks. "Historikk"',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
    }),
    defineField({
      name: 'prosessAriaLabel',
      title: 'Skjermleser-label for års-liste',
      type: 'string',
      description: 'Bruk {{aar}} for årstall. F.eks. "Meldekort for {{aar}}"',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
    }),

    defineField({
      name: 'hendelsetyper',
      title: 'Hendelsetyper',
      type: 'object',
      description: 'Tekster for ulike hendelser i tidslinjen.',
      validation: (Rule) => Rule.required(),
      group: 'hendelser',
      fields: [
        defineField({
          name: 'registrert',
          title: 'Registrert som arbeidssøker',
          type: 'string',
          description: 'F.eks. "Registrert som arbeidssøker"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'avregistrert',
          title: 'Avregistrert som arbeidssøker',
          type: 'string',
          description: 'F.eks. "Avregistrert som arbeidssøker"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'innsendt',
      title: 'Innsendt tidsstempel',
      type: 'string',
      description: 'Bruk {{dato}} og {{tid}}. F.eks. "Innsendt: {{dato}}, kl. {{tid}}"',
      validation: (Rule) => Rule.required(),
      group: 'hendelser',
    }),
    defineField({
      name: 'typeLabels',
      title: 'Type-labels',
      type: 'object',
      description: 'Labels for innsendingstype.',
      validation: (Rule) => Rule.required(),
      group: 'hendelser',
      fields: [
        defineField({
          name: 'elektronisk',
          title: 'Elektronisk',
          type: 'string',
          description: 'F.eks. "Elektronisk"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'manuell',
          title: 'Manuell',
          type: 'string',
          description: 'F.eks. "Manuell"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'object',
      description: 'Tags som vises på meldekort.',
      validation: (Rule) => Rule.required(),
      group: 'hendelser',
      fields: [
        defineField({
          name: 'forSentInnsendt',
          title: 'For sent innsendt',
          type: 'string',
          description: 'F.eks. "Innsendt etter fristen"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'korrigert',
          title: 'Korrigert',
          type: 'string',
          description: 'F.eks. "Korrigert"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'fristLabel',
      title: 'Frist-label',
      type: 'string',
      description: 'Bruk {{dato}} for fristdato. F.eks. "Frist: {{dato}}"',
      validation: (Rule) => Rule.required(),
      group: 'hendelser',
    }),

    defineField({
      name: 'feilmeldinger',
      title: 'Feilmeldinger',
      type: 'object',
      description: 'Feilmeldinger som vises når data mangler.',
      validation: (Rule) => Rule.required(),
      group: 'feilmeldinger',
      fields: [
        defineField({
          name: 'ingenData',
          title: 'Ingen data',
          type: 'string',
          description:
            'F.eks. "Fant hverken meldekort eller arbeidssøkerstatus knyttet til denne personen"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'ingenMeldekort',
          title: 'Ingen meldekort',
          type: 'string',
          description: 'F.eks. "Fant ingen meldekort knyttet til denne personen"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'ingenStatus',
          title: 'Ingen arbeidssøkerstatus',
          type: 'string',
          description: 'F.eks. "Fant ingen arbeidssøkerstatus knyttet til denne personen"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Historikk-modal',
      }
    },
  },
})
