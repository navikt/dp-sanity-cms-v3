import { defineField, defineType } from 'sanity'

export const meldekortFyllUtTabell = defineType({
  name: 'meldekortFyllUtTabell',
  title: 'Fyll ut tabell',
  type: 'document',
  groups: [
    { name: 'tabell', title: 'Tabell', default: true },
    { name: 'enheter', title: 'Tidsenheter (timer/dager)' },
    { name: 'numberInput', title: 'Tallfelter (pluss/minus-knapper)' },
  ],
  fields: [
    defineField({
      name: 'fieldsetLegend',
      title: 'Overskrift for tabellen',
      type: 'string',
      description: 'Tekst som vises over tabellen. F.eks. "Før opp aktiviteter"',
      validation: (Rule) => Rule.required(),
      group: 'tabell',
    }),
    defineField({
      name: 'aktiviteterCaption',
      title: 'Beskrivelse av aktivitetskolonnen (skjermleser)',
      type: 'string',
      description:
        'Hjelpetekst for skjermlesere som beskriver aktivitetskolonnen. Vises ikke på skjermen.',
      validation: (Rule) => Rule.required(),
      group: 'tabell',
    }),
    defineField({
      name: 'sumCaption',
      title: 'Beskrivelse av sumkolonnen (skjermleser)',
      type: 'string',
      description:
        'Hjelpetekst for skjermlesere som beskriver sumkolonnen. Vises ikke på skjermen.',
      validation: (Rule) => Rule.required(),
      group: 'tabell',
    }),
    defineField({
      name: 'weekCaption',
      title: 'Beskrivelse av ukekolonner (skjermleser)',
      type: 'string',
      description:
        'Hjelpetekst for skjermlesere. Bruk {{ukenummer}} for ukenummer. F.eks. "Uke {{ukenummer}}". Vises ikke på skjermen.',
      validation: (Rule) => Rule.required(),
      group: 'tabell',
    }),
    defineField({
      name: 'enheter',
      title: 'Tidsenheter',
      type: 'object',
      description: 'Tekster som vises når man skriver inn timer og dager.',
      validation: (Rule) => Rule.required(),
      group: 'enheter',
      fields: [
        defineField({
          name: 'hours',
          title: 'Timer',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'singular',
              title: 'Entall',
              type: 'string',
              description: 'F.eks. "time" (brukes når det er 1 time)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'plural',
              title: 'Flertall',
              type: 'string',
              description: 'F.eks. "timer" (brukes når det er 0, 2, 3... timer)',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'days',
          title: 'Dager',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'singular',
              title: 'Entall',
              type: 'string',
              description: 'F.eks. "dag" (brukes når det er 1 dag)',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'plural',
              title: 'Flertall',
              type: 'string',
              description: 'F.eks. "dager" (brukes når det er 0, 2, 3... dager)',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'numberInput',
      title: 'Tallfelter (er muligens overflødig og kan fjernes)',
      type: 'object',
      description:
        'Hjelpetekster for skjermlesere når man bruker pluss/minus-knapper i tallfelter.',
      validation: (Rule) => Rule.required(),
      group: 'numberInput',
      fields: [
        defineField({
          name: 'adjustValueAriaLabel',
          title: 'Beskrivelse av tallfelt (skjermleser)',
          type: 'string',
          description: 'Hjelpetekst for skjermlesere. F.eks. "Juster verdi"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'increaseAriaLabel',
          title: 'Beskrivelse av pluss-knapp (skjermleser)',
          type: 'string',
          description: 'Hjelpetekst for pluss-knappen. F.eks. "Øk"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'decreaseAriaLabel',
          title: 'Beskrivelse av minus-knapp (skjermleser)',
          type: 'string',
          description: 'Hjelpetekst for minus-knappen. F.eks. "Reduser"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Fyll ut tabell',
      }
    },
  },
})
