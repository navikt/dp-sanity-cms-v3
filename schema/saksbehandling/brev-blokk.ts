import { defineField, defineType } from 'sanity'
import { textIdField, titleTextField } from '../soknad/common-fields'
import { behandlingOpplysning } from './behandling-opplysning'
import { BulbOutlineIcon, TextIcon } from '@sanity/icons'

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
        defineField({
          name: 'fritekst',
          type: 'object',
          title: 'Fritekst',
          icon: TextIcon,
          fields: [
            defineField({
              name: 'placeholderValue',
              type: 'string',
              readOnly: true,
              initialValue: 'FRITEKST',
            }),
          ],
        }),
      ],
    },
  ],
  preview: {
    select: {
      title: textIdField.name,
    },
  },
})
