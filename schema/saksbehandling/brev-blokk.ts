import { defineField, defineType } from 'sanity'
import { textIdField, titleTextField } from '../soknad/common-fields'
import { behandlingOpplysning } from './behandling-opplysning'
import { BulbOutlineIcon } from '@sanity/icons'

export const brevBlokk = defineType({
  type: 'document',
  name: 'brevBlokk',
  title: 'Brev Blokk',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [
    textIdField,
    titleTextField,
    {
      type: 'boolean',
      name: 'utvidetBeskrivelse',
      title: 'Utvidet beskrivelse',
      initialValue: false,
    },
    {
      title: 'Innhold',
      name: 'innhold',
      type: 'array',
      of: [
        {
          type: 'block',
          of: [
            defineField({
              name: 'opplysningReference',
              type: 'reference',
              to: [{ type: behandlingOpplysning.name }],
              icon: BulbOutlineIcon,
              title: 'Opplysning',
            }),
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: textIdField.name,
    },
  },
})
