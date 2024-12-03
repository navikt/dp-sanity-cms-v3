import { defineField, defineType } from 'sanity'
import { languageField } from '../common-fields'

export const produktsideSEO = defineType({
  readOnly: true,
  name: 'produktsideSEO',
  title: 'Produktside søkemotoroptimalisering',
  type: 'document',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    defineField({
      name: 'title',
      type: 'string',
      title: 'Tittel',
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Beskrivelse',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Bilde',
      fields: [
        {
          name: 'imageAltText',
          type: 'string',
          title: 'Alternativ tekst',
          description: 'Teksten bør beskrive bildet hvis det inneholder informasjon.',
        },
      ],
    }),
  ],
})
