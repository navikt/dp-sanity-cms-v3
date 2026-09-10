import { defineField, defineType } from 'sanity'
import { stringField } from './translated-fields'

const activityFields = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    validation: (Rule) => Rule.required(),
    fields: [stringField('lang', 'Lang tekst'), stringField('kort', 'Kort tekst')],
  })

export const meldekortBrukerflateAktiviteter = defineType({
  name: 'meldekortBrukerflateAktiviteter',
  title: 'Meldekort brukerflate - aktiviteter',
  type: 'document',
  groups: [{ name: 'aktiviteter', title: 'Aktiviteter', default: true }],
  fields: [
    activityFields('jobb', 'Jobb'),
    activityFields('syk', 'Syk'),
    activityFields('ferie', 'Ferie'),
    activityFields('utdanning', 'Utdanning'),
  ],
  preview: {
    prepare() {
      return { title: 'Meldekort brukerflate - aktiviteter' }
    },
  },
})
