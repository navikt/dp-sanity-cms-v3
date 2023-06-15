import { defineField, defineType } from 'sanity'
import { produktsideSectionRichText } from './produktside-section/produktsideSectionRichText'

export const produktsideTopContent = defineType({
  name: 'produktsideTopContent',
  type: 'document',
  title: 'Produktside øverste innhold',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [
    defineField({
      name: 'content',
      title: 'Innhold',
      type: produktsideSectionRichText.name,
    }),
  ],
})
