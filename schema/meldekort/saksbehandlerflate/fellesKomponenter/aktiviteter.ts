import { defineField, defineType } from 'sanity'

export const meldekortAktiviteter = defineType({
  name: 'meldekortAktiviteter',
  title: 'Aktiviteter',
  type: 'document',
  groups: [
    { name: 'jobb', title: 'Jobb', default: true },
    { name: 'syk', title: 'Syk' },
    { name: 'ferie', title: 'Ferie/fravær' },
    { name: 'utdanning', title: 'Utdanning' },
  ],
  fields: [
    defineField({
      name: 'jobb',
      title: 'Jobb',
      type: 'object',
      description: 'Tekster for aktivitetstype "Jobb".',
      validation: (Rule) => Rule.required(),
      group: 'jobb',
      fields: [
        defineField({
          name: 'kort',
          title: 'Kort',
          type: 'string',
          description: 'Kort versjon av teksten (ett ord). Frontend kan vise forbokstav.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'lang',
          title: 'Lang',
          type: 'string',
          description: 'Lang versjon av teksten.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'syk',
      title: 'Syk',
      type: 'object',
      description: 'Tekster for aktivitetstype "Syk".',
      validation: (Rule) => Rule.required(),
      group: 'syk',
      fields: [
        defineField({
          name: 'kort',
          title: 'Kort',
          type: 'string',
          description: 'Kort versjon av teksten (ett ord). Frontend kan vise forbokstav.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'lang',
          title: 'Lang',
          type: 'string',
          description: 'Lang versjon av teksten.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'ferie',
      title: 'Ferie/fravær',
      type: 'object',
      description: 'Tekster for aktivitetstype "Ferie, fravær eller utenlandsopphold".',
      validation: (Rule) => Rule.required(),
      group: 'ferie',
      fields: [
        defineField({
          name: 'kort',
          title: 'Kort',
          type: 'string',
          description: 'Kort versjon av teksten (ett ord). Frontend kan vise forbokstav.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'lang',
          title: 'Lang',
          type: 'string',
          description: 'Lang versjon av teksten.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'utdanning',
      title: 'Utdanning',
      type: 'object',
      description: 'Tekster for aktivitetstype "Tiltak, kurs eller utdanning".',
      validation: (Rule) => Rule.required(),
      group: 'utdanning',
      fields: [
        defineField({
          name: 'kort',
          title: 'Kort',
          type: 'string',
          description: 'Kort versjon av teksten (ett ord). Frontend kan vise forbokstav.',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'lang',
          title: 'Lang',
          type: 'string',
          description: 'Lang versjon av teksten.',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Aktiviteter',
      }
    },
  },
})
