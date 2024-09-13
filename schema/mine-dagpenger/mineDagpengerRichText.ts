import { timeline } from '../soknad/timeline'
import { alertTextField, readMoreField, textIdField } from '../soknad/common-fields'
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
    textIdField,
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
      title: textIdField.name,
    },
  },
})
