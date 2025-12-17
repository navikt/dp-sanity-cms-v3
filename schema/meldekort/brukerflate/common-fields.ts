import { defineField, defineType } from 'sanity'
import { alertTextField, readMoreField, textIdField } from '../../soknad/common-fields'
import { languageField } from '../../common-fields'
import { timeline } from '../../soknad/timeline'
import { BulbOutlineIcon } from '@sanity/icons'

export const dynamicField = defineType({
  type: 'document',
  name: 'dynamicField',
  title: 'Dynamisk felt',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    textIdField,
    {
      type: 'string',
      name: 'type',
      title: 'Datatype',
      options: {
        list: [
          { title: 'Penger', value: 'penger' },
          { title: 'Dato', value: 'dato' },
          { title: 'Heltall', value: 'heltall' },
          { title: 'Desimaltall', value: 'desimaltall' },
          { title: 'Grunnbeløp', value: 'grunnbelop' },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: textIdField.name,
    },
  },
})

export const richTextField = defineField({
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
})
