import { alertTextField, readMoreField, textIdField } from '../soknad/common-fields'
import { dynamicField } from './common-fields'
import { timeline } from '../soknad/timeline'
import { BulbOutlineIcon } from '@sanity/icons'
import { languageField } from '../common-fields'

export const rapporteringRichText = {
  type: 'document',
  name: 'rapporteringRichText',
  title: 'Rik tekst',
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
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Lenke',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                  {
                    title: 'Åpne i ny fane',
                    name: 'blank',
                    type: 'boolean',
                  },
                ],
              },
            ],
          },
          of: [
            {
              name: 'dynamicFieldReference',
              type: 'reference',
              to: [{ type: dynamicField.name }],
              icon: BulbOutlineIcon,
              title: 'Dynamisk felt',
            },
          ],
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
}
