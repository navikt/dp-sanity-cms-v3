import { defineField, defineType } from 'sanity'

export const regelmotorOpplysning = defineType({
  type: 'document',
  name: 'regelmotorOpplysning',
  title: 'Regelmotor opplysning',
  initialValue: {
    language: 'nb',
  },
  fields: [
    defineField({
      type: 'string',
      name: 'opplysningTypeId',
      title: 'Opplysning Type ID',
      readOnly: false,
    }),
    defineField({
      type: 'string',
      name: 'navn',
      title: 'Navn',
      readOnly: false,
    }),
    defineField({
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
    }),
  ],
  preview: {
    select: {
      title: 'navn',
    },
  },
})
