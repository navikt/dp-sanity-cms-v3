import { alertTextField, readMoreField } from '../soknad/common-fields'
import { dynamicField } from './common-fields'
import { timeline } from '../soknad/timeline'
import { BulbOutlineIcon } from '@sanity/icons'

export const rapporteringRichText = {
  type: 'document',
  name: 'rapporteringRichText',
  title: 'Rik tekst',
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
      slug: 'slug.current',
    },
    prepare({ slug }: { slug?: string }) {
      return {
        title: `${slug?.charAt(0).toUpperCase()}${slug?.slice(1)}`,
      }
    },
  },
}
