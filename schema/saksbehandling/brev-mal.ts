import { defineType } from 'sanity'
import { textIdField } from '../soknad/common-fields'
import { brevBlokk } from './brev-blokk'

export const brevMal = defineType({
  type: 'document',
  name: 'brevMal',
  title: 'Brev Mal',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [
    textIdField,
    {
      name: 'brevBlokker',
      title: 'Brev Blokker',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: brevBlokk.name }] }],
    },
  ],
  preview: {
    select: {
      title: textIdField.name,
    },
  },
})
