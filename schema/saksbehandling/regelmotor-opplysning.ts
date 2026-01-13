import { defineField, defineType } from 'sanity'

export const regelmotorOpplysning = defineType({
  type: 'document',
  name: 'regelmotorOpplysning',
  title: 'Regelmotor opplysning',
  fields: [
    defineField({
      type: 'string',
      name: 'opplysningTypeId',
      title: 'Opplysning Type ID',
      readOnly: true,
    }),
    defineField({
      type: 'string',
      name: 'navn',
      title: 'Navn',
      readOnly: true,
    }),
    defineField({
      type: 'string',
      name: 'datatype',
      title: 'Datatype',
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'navn',
    },
  },
})
