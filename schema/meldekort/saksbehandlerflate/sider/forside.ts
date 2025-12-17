import { defineField, defineType } from 'sanity'

export const meldekortForside = defineType({
  name: 'meldekortForside',
  title: 'Forside for Meldekort Saksbehandlerflate',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Overskrift',
      type: 'string',
      description: 'Hovedoverskrift på forsiden (f.eks. "Hei!")',
    }),
    defineField({
      name: 'welcomeText',
      title: 'Velkomsttekst',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
      description: 'Velkomstmelding til brukeren',
    }),
    defineField({
      name: 'sectionHeading',
      title: 'Seksjonsoverskrift',
      type: 'string',
      description: 'Overskrift for seksjonen (f.eks. "Gå til løsningen:")',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Forside',
      }
    },
  },
})
