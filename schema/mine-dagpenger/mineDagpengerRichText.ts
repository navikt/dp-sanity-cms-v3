import { timeline } from '../soknad/timeline'
import { alertTextField, readMoreField } from '../soknad/common-fields'
import { defineType } from 'sanity'
import { languageField } from '../common-fields'

export const mineDagpengerRichText = defineType({
  type: 'document',
  name: 'mineDagpengerRichText',
  title: 'Mine dagpenger rik tekster',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    {
      title: 'Rich tekst nøkkel',
      name: 'slug',
      type: 'slug',
    },
    {
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
    },
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
