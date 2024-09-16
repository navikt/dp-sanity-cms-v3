import { defineField } from 'sanity'
import { languageField } from '../common-fields'

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
  title: 'Lenke beskrivelse',
})

export const mineDagpengerLink = {
  type: 'document',
  name: 'mineDagpengerLink',
  title: 'Mine dagpenger lenker',
  initialValue: {
    language: 'nb',
  },
  fields: [languageField, linkId, linkText, linkUrl, linkDescription],
  preview: {
    select: {
      title: linkId.name,
      subtitle: linkUrl.name,
    },
  },
}
