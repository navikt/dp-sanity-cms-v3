import { defineField, defineType } from 'sanity'
import { textIdField } from '../soknad/common-fields'
import { brevBlokk } from './brev-blokk'
import { languageField } from '../common-fields'

export const brevMal = defineType({
  type: 'document',
  name: 'brevMal',
  title: 'Brev Mal',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    textIdField,
    defineField({
      type: 'string',
      name: 'navn',
      title: 'Navn',
    }),
    {
      name: 'brevBlokker',
      title: 'Brev Blokker',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: brevBlokk.name }] }],
    },
  ],
  preview: {
    select: {
      navn: 'navn',
      textId: textIdField.name,
    },
    prepare({ navn, textId }) {
      return {
        title: navn ?? textId,
      }
    },
  },
})
