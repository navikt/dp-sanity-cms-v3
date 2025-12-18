import { defineField, defineType } from 'sanity'

export const meldekortHovedside = defineType({
  name: 'meldekortHovedside',
  title: 'Hovedside for Meldekort Saksbehandlerflate',
  type: 'document',
  groups: [
    { name: 'generelt', title: 'Generelt', default: true },
    { name: 'meldekort', title: 'Meldekort visning' },
    { name: 'knapper', title: 'Knapper' },
  ],
  fields: [
    defineField({
      name: 'overskrift',
      title: 'Overskrift',
      type: 'string',
      description:
        'Hovedoverskrift. Bruk {{navn}} som placeholder for brukerens navn (f.eks. "Meldekort for {{navn}}")',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
    }),

    defineField({
      name: 'listeOverskrift',
      title: 'Overskrift for listene av meldekort gruppert etter år',
      type: 'string',
      description: 'Bruk {{aar}} som placeholder for år (f.eks. "Meldekort for {{aar}}")',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
    }),

    defineField({
      name: 'tabellKolonner',
      title: 'Tabellkolonner',
      type: 'object',
      description: 'Her kan du endre visningsnavn på kolonnene i tabellen.',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'uke',
          title: 'Uke',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'dato',
          title: 'Dato',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'status',
          title: 'Status',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'aktiviteter',
          title: 'Aktiviteter',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'meldedato',
          title: 'Meldedato',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'frist',
          title: 'Frist',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'meldekortVisning',
      title: 'Meldekort visning',
      type: 'object',
      description: 'Innstillinger for visning av enkeltmeldekort.',
      validation: (Rule) => Rule.required(),
      group: 'meldekort',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'overskrift',
          title: 'Overskrift',
          type: 'string',
          description:
            'Overskrift for meldekortvisningen. Bruk {{uker}} som placeholder for uker (f.eks. "Uke {{uker}}")',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'undertittel',
          title: 'Undertittel',
          type: 'string',
          description: 'Undertittel for aktiviteter',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'utvidetInfoTittel',
          title: 'Tittel for utvidet informasjon',
          type: 'string',
          description:
            'Tittel for tabellen med utvidet informasjon. Brukes i <caption> (skjult visuelt, leses av skjermlesere).',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'utvidetInfoLabels',
          title: 'Titler for utvidet informasjon',
          type: 'object',
          description: 'Her kan du endre visningsnavn for feltene i utvidet informasjon.',
          validation: (Rule) => Rule.required(),
          options: {
            collapsible: true,
            collapsed: true,
          },
          fields: [
            defineField({
              name: 'meldedato',
              title: 'Meldedato',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'datoForInnsending',
              title: 'Dato for innsending',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'datoForKorrigering',
              title: 'Dato for korrigering',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'korrigertAv',
              title: 'Korrigert av',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'innsendtAv',
              title: 'Innsendt av',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'begrunnelse',
              title: 'Begrunnelse',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'svarPaaArbeidssoekerregistrering',
              title: 'Svar på spørsmål om arbeidssøkerregistrering',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'beregnetBruttobelop',
              title: 'Beregnet bruttobeløp',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'periodenBeregningenGjelderFor',
              title: 'Perioden beregningen gjelder for',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),

    defineField({
      name: 'meldinger',
      title: 'Meldinger og varsler',
      type: 'object',
      description: 'Tekster for ulike varsler og infomeldinger som vises i meldekortet.',
      validation: (Rule) => Rule.required(),
      group: 'meldekort',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        defineField({
          name: 'forSentInnsendt',
          title: 'Advarsel om forsent innsendt meldekort',
          type: 'string',
          description:
            'Bruk {{antall}} for antall dager (f.eks. "Dette meldekortet er sendt inn {{antall}} dager etter fristen").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'fraArena',
          title: 'Meldekort fra Arena',
          type: 'string',
          description: 'Vises når meldekortet er fra Arena.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'etterregistrert',
          title: 'Etterregistrert meldekort',
          type: 'string',
          description: 'Vises når meldekortet er etterregistrert.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'kanIkkeEndres',
          title: 'Meldekort kan ikke endres',
          type: 'string',
          description: 'Vises når meldekortet har en korrigering og ikke kan endres igjen.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'belopSamsvarerIkke',
          title: 'Beløp samsvarer ikke med periode',
          type: 'string',
          description: 'Vises når brutto beregnet beløp ikke samsvarer med meldekortperioden.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'knapper',
      title: 'Titler på knapper',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'knapper',
      fields: [
        defineField({
          name: 'korrigerMeldekort',
          title: 'Knapp for korrigering av meldekort',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'fyllutMeldekort',
          title: 'Knapp for utfylling av meldekort',
          type: 'string',
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
