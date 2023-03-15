import { defineField, defineType } from 'sanity'

export const produktsideSEO = defineType({
  name: 'produktsideSEO',
  title: 'Produktside søkemotoroptimalisering',
  type: 'document',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [
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
          options: {
            isHighlighted: true,
          },
        },
      ],
    }),
  ],
})
