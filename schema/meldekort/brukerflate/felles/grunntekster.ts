import { defineField, defineType } from 'sanity'
import { stringField } from './translated-fields'

export const meldekortBrukerflateGrunntekster = defineType({
  name: 'meldekortBrukerflateGrunntekster',
  title: 'Meldekort brukerflate - grunntekster',
  type: 'document',
  groups: [{ name: 'grunntekster', title: 'Grunntekster', default: true }],
  fields: [
    stringField('sidetittel', 'Tittel som vises øverst i brukerflaten'),
    stringField('uke', 'Uke'),
    stringField('timer', 'Timer'),
    stringField('dager', 'Dager'),
    defineField({
      name: 'dag',
      title: 'Dag',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        defineField({
          name: 'lang',
          title: 'Fullt navn på ukedag',
          type: 'internationalizedArrayString',
          description: 'For eksempel «mandag».',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'kort',
          title: 'Kort navn på ukedag',
          type: 'internationalizedArrayString',
          description: 'For eksempel «man».',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Meldekort brukerflate - grunntekster' }
    },
  },
})
