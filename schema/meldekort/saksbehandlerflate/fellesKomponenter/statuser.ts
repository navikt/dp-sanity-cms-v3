import { defineField, defineType } from 'sanity'

export const meldekortStatuser = defineType({
  name: 'meldekortStatuser',
  title: 'Statuser',
  type: 'document',
  fields: [
    defineField({
      name: 'tilUtfylling',
      title: 'Klar til utfylling',
      type: 'string',
      description: 'Tekst som vises når meldekortet er klart til å fylles ut.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'innsendt',
      title: 'Innsendt',
      type: 'string',
      description: 'Tekst som vises når meldekortet er sendt inn.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'meldekortOpprettet',
      title: 'Meldekort opprettet',
      type: 'string',
      description: 'Tekst som vises når meldekortet nettopp er opprettet.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'korrigering',
      title: 'Under korrigering',
      type: 'string',
      description: 'Tekst som vises når meldekortet er under korrigering.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'korrigert',
      title: 'Korrigert',
      type: 'string',
      description: 'Tekst som vises når meldekortet er korrigert.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'arena',
      title: 'Fra Arena',
      type: 'string',
      description: 'Tekst som vises når meldekortet kommer fra Arena.',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Statuser',
      }
    },
  },
})
