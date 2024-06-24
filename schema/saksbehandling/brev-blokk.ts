import { defineType } from 'sanity'
import { textIdField, titleTextField } from '../soknad/common-fields'
import { behandlingOpplysning } from './behandling-opplysning'

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
          marks: {
            annotations: [
              {
                name: 'behandlingOpplysningReference',
                type: 'object',
                title: 'Behandling Opplysning Reference',
                fields: [
                  {
                    name: 'reference',
                    type: 'reference',
                    to: [{ type: behandlingOpplysning.name }],
                    title: 'Reference',
                  },
                  {
                    name: 'text',
                    type: 'string',
                    title: 'Display Text',
                  },
                ],
              },
            ],
          },
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
