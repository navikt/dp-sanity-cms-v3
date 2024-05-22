import { defineField } from 'sanity'

const linkId = defineField({
  type: 'string',
  name: 'linkId',
  title: 'Lenkenøkkel',
})

const linkText = defineField({
  type: 'string',
  name: 'linkText',
  title: 'Lenketekst',
})

const linkUrl = defineField({
  type: 'string',
  name: 'linkUrl',
  title: 'Url',
})

const linkDescription = defineField({
  type: 'string',
  name: 'linkDescription',
  title: 'Beskrivelse',
})

export const rapporteringLink = {
  type: 'document',
  name: 'rapporteringLink',
  title: 'Lenker',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [linkId, linkText, linkUrl, linkDescription],
  preview: {
    select: {
      title: linkId.name,
      subtitle: linkUrl.name,
    },
  },
}
