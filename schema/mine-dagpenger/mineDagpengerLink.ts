import { defineField } from 'sanity'

const linkId = defineField({
  type: 'string',
  name: 'linkId',
  title: 'Lenkenøkkel',
})

const linkText = defineField({
  type: 'string',
  name: 'linkText',
  title: 'Lenketeskt',
})

const linkUrl = defineField({
  type: 'string',
  name: 'linkUrl',
  title: 'Url',
})

const linkDescription = defineField({
  type: 'string',
  name: 'linkDescription',
  title: 'Lenke beskrivelse',
})

export const mineDagpengerLink = {
  type: 'document',
  name: 'mineDagpengerLink',
  title: 'Mine dagpenger lenker',
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
