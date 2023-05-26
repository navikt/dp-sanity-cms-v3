import { defineField, defineType } from 'sanity'
import { alertTextField, readMoreField, textIdField, valueTextField } from '../soknad/common-fields'
import { timeline } from '../soknad/timeline'

export const rapporteringInfoSide = defineType({
  type: 'document',
  name: 'rapporteringInfoSide',
  title: 'Rapportering infoside',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [
    defineField({
      title: 'Sti',
      name: 'slug',
      type: 'slug',
    }),
    defineField({
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
    }),
  ],
  preview: {
    select: {
      title: textIdField.name,
      subtitle: valueTextField.name,
    },
  },
})
