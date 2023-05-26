import { alertTextField, readMoreField, textIdField, valueTextField } from '../soknad/common-fields'
import { defineField, defineType } from 'sanity'
import { timeline } from '../soknad/timeline'

export const saksbehandlingInfoSide = defineType({
  type: 'document',
  name: 'saksbehandlingInfoSide',
  title: 'Saksbehandling infoside',
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
