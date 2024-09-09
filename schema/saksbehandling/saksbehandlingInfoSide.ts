import { defineField, defineType } from 'sanity'
import { alertTextField, readMoreField } from '../soknad/common-fields'
import { timeline } from '../soknad/timeline'
import { languageField } from '../common-fields'

export const saksbehandlingInfoSide = defineType({
  type: 'document',
  name: 'saksbehandlingInfoSide',
  title: 'Saksbehandling infoside',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    defineField({
      title: 'Sti',
      name: 'slug',
      type: 'slug',
    }),
    defineField({
      type: 'array',
      name: 'body',
      title: 'Innhold',
      of: [
        {
          type: 'block',
        },
        { type: timeline.name },
        { type: alertTextField.name },
        { type: readMoreField.name },
      ],
    }),
  ],
  preview: {
    select: {
      slug: 'slug.current',
    },
    prepare({ slug }: { slug?: string }) {
      return {
        title: `${slug?.charAt(0).toUpperCase()}${slug?.slice(1)}`,
      }
    },
  },
})
