import { defineField, defineType } from 'sanity'

// Universale skjermleser-tekster for meldekort
export const meldekortSkjermleserTekster = defineType({
  name: 'meldekortSkjermleserTekster',
  title: 'Skjermleser-tekster',
  type: 'document',
  fields: [
    defineField({
      name: 'visMer',
      title: 'Vis mer',
      type: 'string',
      description:
        'Tekst for "Vis mer"-lenken. Brukes i TruncatedText-komponenten. Aria-label genereres automatisk med "{{visMer}} av begrunnelsen".',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'visMindre',
      title: 'Vis mindre',
      type: 'string',
      description:
        'Tekst for "Vis mindre"-lenken. Brukes i TruncatedText-komponenten. Aria-label genereres automatisk med "{{visMindre}} av begrunnelsen".',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Skjermleser-tekster',
      }
    },
  },
})
