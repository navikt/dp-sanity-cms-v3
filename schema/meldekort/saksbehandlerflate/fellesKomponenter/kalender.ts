import { defineField, defineType } from 'sanity'

export const meldekortKalender = defineType({
  name: 'meldekortKalender',
  title: 'Kalender',
  type: 'document',
  groups: [
    { name: 'kalender', title: 'Kalender', default: true },
    { name: 'ukedager', title: 'Ukedager' },
  ],
  fields: [
    defineField({
      name: 'tableCaption',
      title: 'Beskrivelse av kalender (skjermleser)',
      type: 'string',
      description:
        'Hjelpetekst for skjermlesere. Bruk {{x}} og {{y}} for ukenummer. F.eks. "Oversikt over rapporterte dager for uke {{x}} og {{y}}". Vises ikke på skjermen.',
      validation: (Rule) => Rule.required(),
      group: 'kalender',
    }),
    defineField({
      name: 'weekLabel',
      title: 'Uke-tekst',
      type: 'string',
      description: 'Tekst for uke. Bruk {{uke}} for ukenummer. F.eks. "Uke {{uke}}"',
      validation: (Rule) => Rule.required(),
      group: 'kalender',
    }),
    defineField({
      name: 'ukedager',
      title: 'Ukedager',
      type: 'object',
      description: 'Navn på ukedager i kort og lang form.',
      validation: (Rule) => Rule.required(),
      group: 'ukedager',
      fields: [
        defineField({
          name: 'monday',
          title: 'Mandag',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'short',
              title: 'Kort',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'long',
              title: 'Lang',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'tuesday',
          title: 'Tirsdag',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'short',
              title: 'Kort',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'long',
              title: 'Lang',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'wednesday',
          title: 'Onsdag',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'short',
              title: 'Kort',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'long',
              title: 'Lang',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'thursday',
          title: 'Torsdag',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'short',
              title: 'Kort',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'long',
              title: 'Lang',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'friday',
          title: 'Fredag',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'short',
              title: 'Kort',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'long',
              title: 'Lang',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'saturday',
          title: 'Lørdag',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'short',
              title: 'Kort',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'long',
              title: 'Lang',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'sunday',
          title: 'Søndag',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'short',
              title: 'Kort',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'long',
              title: 'Lang',
              type: 'string',
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
        title: 'Kalender',
      }
    },
  },
})
