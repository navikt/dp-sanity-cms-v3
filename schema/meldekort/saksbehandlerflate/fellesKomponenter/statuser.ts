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
      description:
        'Tekst som vises når meldekortet er klart til å fylles ut. F.eks. "Klar til utfylling"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'innsendt',
      title: 'Innsendt',
      type: 'string',
      description: 'Tekst som vises når meldekortet er sendt inn. F.eks. "Innsendt"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'meldekortOpprettet',
      title: 'Meldekort opprettet',
      type: 'string',
      description:
        'Tekst som vises når meldekortet nettopp er opprettet. F.eks. "Meldekort opprettet"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'korrigering',
      title: 'Under korrigering',
      type: 'string',
      description: 'Tekst som vises når meldekortet er under korrigering. F.eks. "Korrigering"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'korrigert',
      title: 'Korrigert',
      type: 'string',
      description: 'Tekst som vises når meldekortet er korrigert. F.eks. "Korrigert"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'arena',
      title: 'Fra Arena',
      type: 'string',
      description: 'Tekst som vises når meldekortet kommer fra Arena. F.eks. "Arena"',
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
