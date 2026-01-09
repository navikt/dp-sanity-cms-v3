import { defineField, defineType } from 'sanity'

export const meldekortBekreftModal = defineType({
  name: 'meldekortBekreftModal',
  title: 'Bekreft-modal',
  type: 'document',
  groups: [
    { name: 'avbrytUtfylling', title: 'Avbryt utfylling', default: true },
    { name: 'fullfoerUtfylling', title: 'Fullfør utfylling' },
    { name: 'avbrytKorrigering', title: 'Avbryt korrigering' },
    { name: 'fullfoerKorrigering', title: 'Fullfør korrigering' },
  ],
  fields: [
    defineField({
      name: 'avbrytUtfylling',
      title: 'Avbryt utfylling',
      type: 'object',
      description: 'Vises når bruker vil avbryte utfylling av meldekort.',
      validation: (Rule) => Rule.required(),
      group: 'avbrytUtfylling',
      fields: [
        defineField({
          name: 'overskrift',
          title: 'Overskrift',
          type: 'string',
          description: 'F.eks. "Vil du avbryte utfyllingen?"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'innhold',
          title: 'Innhold',
          type: 'string',
          description: 'F.eks. "Hvis du avbryter, vil ikke det du har fylt ut så langt lagres"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'bekreftKnapp',
          title: 'Bekreft-knapp',
          type: 'string',
          description: 'F.eks. "Ja, avbryt"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'avbrytKnapp',
          title: 'Avbryt-knapp',
          type: 'string',
          description: 'F.eks. "Nei, fortsett"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'fullfoerUtfylling',
      title: 'Fullfør utfylling',
      type: 'object',
      description: 'Vises når bruker vil sende inn utfylt meldekort.',
      validation: (Rule) => Rule.required(),
      group: 'fullfoerUtfylling',
      fields: [
        defineField({
          name: 'overskrift',
          title: 'Overskrift',
          type: 'string',
          description: 'F.eks. "Vil du fullføre utfyllingen?"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'innhold',
          title: 'Innhold',
          type: 'string',
          description: 'F.eks. "Ved å trykke "Ja" vil utfyllingen sendes inn."',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'bekreftKnapp',
          title: 'Bekreft-knapp',
          type: 'string',
          description: 'F.eks. "Ja, send inn"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'avbrytKnapp',
          title: 'Avbryt-knapp',
          type: 'string',
          description: 'F.eks. "Nei, avbryt"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'avbrytKorrigering',
      title: 'Avbryt korrigering',
      type: 'object',
      description: 'Vises når bruker vil avbryte korrigering av meldekort.',
      validation: (Rule) => Rule.required(),
      group: 'avbrytKorrigering',
      fields: [
        defineField({
          name: 'overskrift',
          title: 'Overskrift',
          type: 'string',
          description: 'F.eks. "Vil du avbryte korrigeringen?"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'innhold',
          title: 'Innhold',
          type: 'string',
          description:
            'F.eks. "Hvis du avbryter, vil ikke endringene du har gjort så langt lagres"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'bekreftKnapp',
          title: 'Bekreft-knapp',
          type: 'string',
          description: 'F.eks. "Ja, avbryt"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'avbrytKnapp',
          title: 'Avbryt-knapp',
          type: 'string',
          description: 'F.eks. "Nei, fortsett"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    defineField({
      name: 'fullfoerKorrigering',
      title: 'Fullfør korrigering',
      type: 'object',
      description: 'Vises når bruker vil sende inn korrigert meldekort.',
      validation: (Rule) => Rule.required(),
      group: 'fullfoerKorrigering',
      fields: [
        defineField({
          name: 'overskrift',
          title: 'Overskrift',
          type: 'string',
          description: 'F.eks. "Vil du fullføre korrigeringen?"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'innhold',
          title: 'Innhold',
          type: 'string',
          description: 'F.eks. "Ved å trykke "Ja" vil korrigeringen sendes inn."',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'bekreftKnapp',
          title: 'Bekreft-knapp',
          type: 'string',
          description: 'F.eks. "Ja, fullfør"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'avbrytKnapp',
          title: 'Avbryt-knapp',
          type: 'string',
          description: 'F.eks. "Nei, avbryt"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Bekreft-modal',
      }
    },
  },
})
