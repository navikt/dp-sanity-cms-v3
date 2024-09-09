import { timeline } from './timeline'
import { alertTextField, readMoreField } from './common-fields'
import { defineField, defineType } from 'sanity'
import { languageField } from '../common-fields'

export const infopage = defineType({
  type: 'document',
  name: 'infopage',
  title: 'Infoside',
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
