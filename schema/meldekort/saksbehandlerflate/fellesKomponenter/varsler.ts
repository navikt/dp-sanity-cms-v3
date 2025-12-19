import { defineField, defineType } from 'sanity'

export const meldekortVarsler = defineType({
  name: 'meldekortVarsler',
  title: 'Varsler og feilmeldinger',
  type: 'document',
  groups: [
    { name: 'skjermleserStatus', title: 'Skjermleser-statusmeldinger', default: true },
    { name: 'suksess', title: 'Suksessmeldinger' },
    { name: 'feil', title: 'Feilmeldinger' },
    { name: 'errorBoundary', title: 'Feilside' },
  ],
  fields: [
    defineField({
      name: 'skjermleserStatus',
      title: 'Skjermleser-statusmeldinger',
      type: 'object',
      description:
        'Tekster som leses opp for brukere med skjermleser under innsending/korrigering. Disse er ikke synlige visuelt.',
      validation: (Rule) => Rule.required(),
      group: 'skjermleserStatus',
      fields: [
        defineField({
          name: 'senderInn',
          title: 'Sender inn',
          type: 'string',
          description: 'Melding under innsending. F.eks. "Sender inn meldekort..."',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'behandler',
          title: 'Behandler',
          type: 'string',
          description:
            'Melding mens vi venter på svar. F.eks. "Meldekortet behandles, vennligst vent"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'feilet',
          title: 'Feilet',
          type: 'string',
          description: 'Melding ved feil. F.eks. "Innsending feilet. Prøv igjen senere."',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'suksess',
          title: 'Suksess',
          type: 'string',
          description: 'Melding ved suksess. F.eks. "Meldekortet er sendt inn"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'suksess',
      title: 'Suksessmeldinger',
      type: 'object',
      description: 'Meldinger som vises når handlinger lykkes.',
      validation: (Rule) => Rule.required(),
      group: 'suksess',
      fields: [
        defineField({
          name: 'submittedSuccess',
          title: 'Innsendt',
          type: 'string',
          description:
            'Melding som vises når meldekort er sendt inn. F.eks. "Meldekortet ble sendt inn"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'correctedSuccess',
          title: 'Korrigert',
          type: 'string',
          description:
            'Melding som vises når meldekort er korrigert. F.eks. "Meldekortet ble korrigert"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'feil',
      title: 'Feilmeldinger',
      type: 'object',
      description: 'Meldinger som vises når handlinger feiler.',
      validation: (Rule) => Rule.required(),
      group: 'feil',
      fields: [
        defineField({
          name: 'submissionFailedTitle',
          title: 'Innsending feilet - tittel',
          type: 'string',
          description: 'Tittel på feilmelding når innsending feiler. F.eks. "Innsending feilet"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'correctionFailedTitle',
          title: 'Korrigering feilet - tittel',
          type: 'string',
          description: 'Tittel på feilmelding når korrigering feiler. F.eks. "Korrigering feilet"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'errorText',
          title: 'Innhold i feilbeskrivelse',
          type: 'string',
          description:
            'Tekst med feil-ID. Bruk {{id}} for feil-ID. F.eks. "Om du trenger hjelp kan du oppgi feil-ID: {{id}}"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'errorBoundary',
      title: 'Feilside',
      type: 'object',
      description: 'Tekster som vises på feilsiden når noe går galt.',
      validation: (Rule) => Rule.required(),
      group: 'errorBoundary',
      fields: [
        defineField({
          name: 'notFoundTitle',
          title: 'Ikke funnet - tittel',
          type: 'string',
          description: 'Tittel når siden ikke finnes. F.eks. "Fant ikke det du leter etter"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'generalErrorTitle',
          title: 'Generell feil - tittel',
          type: 'string',
          description: 'Tittel for generelle feil. F.eks. "Beklager, det har skjedd en feil"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'defaultDescription',
          title: 'Standard beskrivelse',
          type: 'string',
          description: 'Standard feilbeskrivelse. F.eks. "Vi beklager, men noe gikk galt."',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'errorText',
          title: 'Innhold i feilbeskrivelse',
          type: 'string',
          description:
            'Tekst med feil-ID. Bruk {{id}} for feil-ID. F.eks. "Om du trenger hjelp kan du oppgi feil-ID: {{id}}"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Varsler og feilmeldinger',
      }
    },
  },
})
