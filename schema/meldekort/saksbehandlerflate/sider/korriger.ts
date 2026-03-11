import { defineField, defineType } from 'sanity'

// Korriger meldekort side
export const meldekortKorriger = defineType({
  name: 'meldekortKorriger',
  title: 'Korriger meldekort',
  type: 'document',
  groups: [
    { name: 'overskrifter', title: 'Overskrifter', default: true },
    { name: 'gjeldendeMeldekort', title: 'Gjeldende meldekort' },
    { name: 'korrigeringsskjema', title: 'Korrigeringsskjema' },
    { name: 'statusmeldinger', title: 'Statusmeldinger' },
  ],
  fields: [
    // === overskrifter ===
    defineField({
      name: 'overskrift',
      title: 'Sidetittel',
      type: 'string',
      description: 'F.eks. "Korriger meldekort"',
      validation: (Rule) => Rule.required(),
      group: 'overskrifter',
    }),
    defineField({
      name: 'underoverskrift',
      title: 'Undertittel med periode',
      type: 'string',
      description:
        'Viser hvilken periode som korrigeres. Bruk {{uker}} for ukenummer og {{periode}} for datoer. F.eks. "Uke {{uker}} ({{periode}})"',
      validation: (Rule) => Rule.required(),
      group: 'overskrifter',
    }),

    // === GJELDENDE MELDEKORT ===
    defineField({
      name: 'gjeldendeMeldekort',
      title: 'Gjeldende meldekort',
      type: 'object',
      description: 'Tekster for visning av meldekortet som skal korrigeres.',
      validation: (Rule) => Rule.required(),
      group: 'gjeldendeMeldekort',
      fields: [
        defineField({
          name: 'overskrift',
          title: 'Overskrift',
          type: 'string',
          description: 'F.eks. "Innsendt meldekort"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'innsendtDato',
          title: 'Tekst for innsendingsdato',
          type: 'string',
          description: 'Bruk {{dato}} for datoen. F.eks. "Innsendt {{dato}}"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'begrunnelseOverskrift',
          title: 'Overskrift for begrunnelse',
          type: 'object',
          description:
            'Overskriften varierer basert på om meldekortet er korrigert eller manuelt innsendt.',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'korrigering',
              title: 'Ved korrigering',
              type: 'string',
              description: 'Vises hvis meldekortet er korrigert fra før.',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'manuellInnsending',
              title: 'Ved manuell innsending',
              type: 'string',
              description: 'Vises hvis meldekortet er innsendt manuelt.',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),

    // === KORRIGERINGSSKJEMA ===
    defineField({
      name: 'korrigeringsskjema',
      title: 'Korrigeringsskjema',
      type: 'object',
      description: 'Tekster for utfyllingsskjemaet.',
      validation: (Rule) => Rule.required(),
      group: 'korrigeringsskjema',
      fields: [
        defineField({
          name: 'overskrift',
          title: 'Overskrift',
          type: 'string',
          description: 'F.eks. "Ny korrigering"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'skjermleserHint',
          title: 'Instruksjon for skjermlesere',
          type: 'string',
          description:
            'Forklarer hvordan brukeren korrigerer. F.eks. "Fyll inn aktivitet for hver dag og skriv en begrunnelse for korrigeringen."',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'datovelgerLabel',
          title: 'Label for datovelger',
          type: 'string',
          description: 'F.eks. "Velg dato"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'begrunnelseLabel',
          title: 'Label for begrunnelse',
          type: 'string',
          description: 'F.eks. "Begrunnelse for korrigering"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'begrunnelseFeilmelding',
          title: 'Feilmelding for begrunnelse',
          type: 'string',
          description: 'F.eks. "Du må fylle inn begrunnelse for korrigeringen"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // === KNAPPER ===
    defineField({
      name: 'knapper',
      title: 'Knapper',
      type: 'object',
      description: 'Tekster på knappene nederst på siden.',
      validation: (Rule) => Rule.required(),
      group: 'korrigeringsskjema',
      fields: [
        defineField({
          name: 'avbryt',
          title: 'Avbryt-knapp',
          type: 'string',
          description: 'F.eks. "Avbryt"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'fullfoer',
          title: 'Fullfør-knapp',
          type: 'string',
          description: 'F.eks. "Send inn korrigering"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // === SKJERMLESER-STATUS ===
    defineField({
      name: 'skjermleserStatus',
      title: 'Statusmeldinger for skjermlesere',
      type: 'object',
      description:
        'Tekster som leses opp for brukere med skjermleser når de sender inn korrigeringen. Disse er ikke synlige visuelt.',
      validation: (Rule) => Rule.required(),
      group: 'statusmeldinger',
      fields: [
        defineField({
          name: 'senderInn',
          title: 'Tekst under innsending',
          type: 'string',
          description: 'F.eks. "Sender inn korrigering..."',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'behandler',
          title: 'Tekst mens vi venter på svar',
          type: 'string',
          description: 'F.eks. "Korrigeringen behandles, vennligst vent"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'feilet',
          title: 'Tekst ved feil',
          type: 'string',
          description: 'F.eks. "Innsending feilet. Prøv igjen senere."',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'suksess',
          title: 'Tekst ved suksess',
          type: 'string',
          description: 'F.eks. "Korrigeringen er sendt inn"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Korriger meldekort',
      }
    },
  },
})
