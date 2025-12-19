import { defineField, defineType } from 'sanity'

export const meldekortHovedside = defineType({
  name: 'meldekortHovedside',
  title: 'Hovedside for Meldekort Saksbehandlerflate',
  type: 'document',
  groups: [
    { name: 'sideoverskrift', title: 'Sideoverskrift', default: true },
    { name: 'meldekortliste', title: 'Meldekortliste' },
    { name: 'utvidetVisning', title: 'Utvidet visning' },
    { name: 'varsler', title: 'Varsler' },
  ],
  fields: [
    // === SIDEOVERSKRIFT ===
    defineField({
      name: 'overskrift',
      title: 'Sidetittel',
      type: 'string',
      description: 'Bruk {{navn}} for brukerens navn. F.eks. "Meldekort for {{navn}}"',
      validation: (Rule) => Rule.required(),
      group: 'sideoverskrift',
    }),
    defineField({
      name: 'listeOverskrift',
      title: 'Årsoverskrift for meldekortliste',
      type: 'string',
      description: 'Bruk {{aar}} for årstall. F.eks. "Meldekort for {{aar}}"',
      validation: (Rule) => Rule.required(),
      group: 'sideoverskrift',
    }),

    // === MELDEKORTLISTE ===
    defineField({
      name: 'tabellKolonner',
      title: 'Kolonnenavn i tabellen',
      type: 'object',
      description: 'Overskriftene for hver kolonne i meldekortlisten.',
      validation: (Rule) => Rule.required(),
      group: 'meldekortliste',
      fields: [
        defineField({
          name: 'uke',
          title: 'Uke',
          type: 'string',
          description: 'F.eks. "Uke"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'dato',
          title: 'Dato',
          type: 'string',
          description: 'F.eks. "Dato"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'status',
          title: 'Status',
          type: 'string',
          description: 'F.eks. "Status"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'aktiviteter',
          title: 'Aktiviteter',
          type: 'string',
          description: 'F.eks. "Aktiviteter"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'meldedato',
          title: 'Meldedato',
          type: 'string',
          description: 'F.eks. "Meldedato"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'frist',
          title: 'Frist',
          type: 'string',
          description: 'F.eks. "Frist"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // === UTVIDET VISNING ===
    defineField({
      name: 'utvidetVisning',
      title: 'Utvidet visning',
      type: 'object',
      description: 'Tekster som vises når man ekspanderer en rad i tabellen.',
      validation: (Rule) => Rule.required(),
      group: 'utvidetVisning',
      fields: [
        defineField({
          name: 'overskrift',
          title: 'Overskrift',
          type: 'string',
          description: 'Bruk {{uker}} for ukenummer. F.eks. "Uke {{uker}}"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'aktiviteterTittel',
          title: 'Tittel for aktiviteter',
          type: 'string',
          description: 'F.eks. "Aktiviteter"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'tabellTittel',
          title: 'Tittel for informasjonstabell (skjermleser)',
          type: 'string',
          description:
            'Skjult visuelt, men leses av skjermlesere. F.eks. "Detaljer om meldekortet"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'infoLabels',
          title: 'Labels for informasjonsfelt',
          type: 'object',
          description: 'Titler for feltene i informasjonstabellen.',
          validation: (Rule) => Rule.required(),
          options: {
            collapsible: true,
            collapsed: false,
          },
          fields: [
            defineField({
              name: 'meldedato',
              title: 'Meldedato',
              type: 'string',
              description: 'F.eks. "Meldedato"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'datoForInnsending',
              title: 'Dato for innsending',
              type: 'string',
              description: 'F.eks. "Innsendt"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'datoForKorrigering',
              title: 'Dato for korrigering',
              type: 'string',
              description: 'F.eks. "Korrigert"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'korrigertAv',
              title: 'Korrigert av',
              type: 'string',
              description: 'F.eks. "Korrigert av"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'innsendtAv',
              title: 'Innsendt av',
              type: 'string',
              description: 'F.eks. "Innsendt av"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'begrunnelse',
              title: 'Begrunnelse',
              type: 'string',
              description: 'F.eks. "Begrunnelse"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'svarPaaArbeidssoekerregistrering',
              title: 'Svar på arbeidssøker-spørsmål',
              type: 'string',
              description: 'F.eks. "Fortsatt arbeidssøker"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'beregnetBruttobelop',
              title: 'Beregnet bruttobeløp',
              type: 'string',
              description: 'F.eks. "Beregnet brutto"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'periodenBeregningenGjelderFor',
              title: 'Periode for beregning',
              type: 'string',
              description: 'F.eks. "Beregningsperiode"',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),

    // === KNAPPER ===
    defineField({
      name: 'knapper',
      title: 'Knapper',
      type: 'object',
      description: 'Tekster på knappene i utvidet visning.',
      validation: (Rule) => Rule.required(),
      group: 'utvidetVisning',
      options: {
        collapsible: true,
        collapsed: false,
      },
      fields: [
        defineField({
          name: 'korrigerMeldekort',
          title: 'Korriger-knapp',
          type: 'string',
          description: 'F.eks. "Korriger meldekort"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'fyllutMeldekort',
          title: 'Fyll ut-knapp',
          type: 'string',
          description: 'F.eks. "Fyll ut meldekort"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // === VARSLER ===
    defineField({
      name: 'varsler',
      title: 'Varselmeldinger',
      type: 'object',
      description: 'Varsler og infomeldinger som vises i utvidet visning.',
      validation: (Rule) => Rule.required(),
      group: 'varsler',
      fields: [
        defineField({
          name: 'forSentInnsendt',
          title: 'For sent innsendt',
          type: 'string',
          description:
            'Bruk {{antall}} for antall dager. F.eks. "Sendt inn {{antall}} dager etter fristen"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'fraArena',
          title: 'Fra Arena',
          type: 'string',
          description: 'Vises når meldekortet kommer fra Arena.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'etterregistrert',
          title: 'Etterregistrert',
          type: 'string',
          description: 'Vises når meldekortet er etterregistrert.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'kanIkkeEndres',
          title: 'Kan ikke endres',
          type: 'string',
          description: 'Vises når meldekortet allerede er korrigert.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'belopSamsvarerIkke',
          title: 'Beløp samsvarer ikke',
          type: 'string',
          description: 'Vises når beløpet ikke samsvarer med perioden.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Hovedside',
      }
    },
  },
})
