import { defineField, defineType } from 'sanity'

// Fyll ut meldekort side
export const meldekortFyllUt = defineType({
  name: 'meldekortFyllUt',
  title: 'Fyll ut meldekort',
  type: 'document',
  groups: [
    { name: 'generelt', title: 'Generelt', default: true },
    { name: 'utfyllingsskjema', title: 'Utfyllingsskjema' },
    { name: 'statusmeldinger', title: 'Statusmeldinger' },
  ],
  fields: [
    defineField({
      name: 'overskrift',
      title: 'Sidetittel',
      type: 'string',
      description: 'F.eks. "Fyll ut meldekort"',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
    }),
    defineField({
      name: 'underoverskrift',
      title: 'Undertittel med periode',
      type: 'string',
      description:
        'Viser hvilken periode som fylles ut. Bruk {{uker}} for ukenummer og {{periode}} for datoer. F.eks. "Uke {{uker}} ({{periode}})"',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
    }),
    defineField({
      name: 'varsler',
      title: 'Varselmeldinger',
      type: 'object',
      description: 'Varsler som vises øverst på siden i spesielle tilfeller.',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
      fields: [
        defineField({
          name: 'arenaVarsel',
          title: 'Varsel for Arena-meldekort',
          type: 'string',
          description: 'Vises når meldekortet kommer fra Arena.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'etterregistrertVarsel',
          title: 'Varsel for etterregistrering',
          type: 'string',
          description: 'Vises når meldekortet er etterregistrert.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'utfyllingsskjema',
      title: 'Utfyllingsskjema',
      type: 'object',
      description: 'Labels og tekster for skjemafeltene.',
      validation: (Rule) => Rule.required(),
      group: 'utfyllingsskjema',
      fields: [
        defineField({
          name: 'datovelgerLabel',
          title: 'Label for datovelger',
          type: 'string',
          description: 'F.eks. "Velg dato"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'arbeidssoekerSpoersmaal',
          title: 'Arbeidssøker-spørsmål',
          type: 'object',
          description: 'Spørsmål om brukeren fortsatt er arbeidssøker.',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'tittel',
              title: 'Spørsmålstittel',
              type: 'string',
              description: 'F.eks. "Vil du fortsatt være registrert som arbeidssøker?"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'ja',
              title: 'Ja-alternativ',
              type: 'string',
              description: 'F.eks. "Ja"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'nei',
              title: 'Nei-alternativ',
              type: 'string',
              description: 'F.eks. "Nei"',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'begrunnelseLabel',
          title: 'Label for begrunnelse',
          type: 'string',
          description: 'F.eks. "Begrunnelse for innsending"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'feilmeldinger',
      title: 'Feilmeldinger',
      type: 'object',
      description: 'Vises når brukeren fyller ut skjemaet feil.',
      validation: (Rule) => Rule.required(),
      group: 'utfyllingsskjema',
      fields: [
        defineField({
          name: 'datovelgerFeil',
          title: 'Manglende dato',
          type: 'string',
          description: 'F.eks. "Du må velge en dato"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'arbeidssoekerFeil',
          title: 'Manglende arbeidssøker-valg',
          type: 'string',
          description: 'F.eks. "Du må svare på om du vil fortsette som arbeidssøker"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'begrunnelseFeil',
          title: 'Manglende begrunnelse',
          type: 'string',
          description: 'F.eks. "Du må fylle inn begrunnelse"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'knapper',
      title: 'Knapper',
      type: 'object',
      description: 'Tekster på knappene nederst på siden.',
      validation: (Rule) => Rule.required(),
      group: 'utfyllingsskjema',
      fields: [
        defineField({
          name: 'avbryt',
          title: 'Avbryt-knapp',
          type: 'string',
          description: 'F.eks. "Avbryt"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'sendInn',
          title: 'Send inn-knapp',
          type: 'string',
          description: 'F.eks. "Send inn meldekort"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'skjermleserStatus',
      title: 'Statusmeldinger for skjermlesere',
      type: 'object',
      description:
        'Tekster som leses opp for brukere med skjermleser når de sender inn meldekortet. Disse er ikke synlige visuelt.',
      validation: (Rule) => Rule.required(),
      group: 'statusmeldinger',
      fields: [
        defineField({
          name: 'senderInn',
          title: 'Tekst under innsending',
          type: 'string',
          description: 'F.eks. "Sender inn meldekort..."',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'behandler',
          title: 'Tekst mens vi venter på svar',
          type: 'string',
          description: 'F.eks. "Meldekortet behandles, vennligst vent"',
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
          description: 'F.eks. "Meldekortet er sendt inn"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Fyll ut meldekort',
      }
    },
  },
})
