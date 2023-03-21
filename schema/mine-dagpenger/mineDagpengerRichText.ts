// import { MdTextFields } from 'react-icons/md'
import { timeline } from '../soknad/timeline'
import { alertTextField, readMoreField } from '../soknad/common-fields'
import { defineType } from 'sanity'

export const mineDagpengerRichText = defineType({
  type: 'document',
  name: 'mineDagpengerRichText',
  title: 'Mine dagpenger rik tekster',
  // icon: MdTextFields,
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [
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
  },
})
