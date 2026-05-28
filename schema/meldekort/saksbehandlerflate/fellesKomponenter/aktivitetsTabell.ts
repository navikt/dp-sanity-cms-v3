import { defineField, defineType } from 'sanity'

export const meldekortAktivitetsTabell = defineType({
  name: 'meldekortAktivitetsTabell',
  title: 'Aktivitetstabell',
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
      description:
        'Overskrift som vises over tabellen i utfyllingsskjemaet. F.eks. "Før opp aktiviteter"',
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
  ],
  preview: {
    prepare() {
      return {
        title: 'Aktivitetstabell',
      }
    },
  },
})
