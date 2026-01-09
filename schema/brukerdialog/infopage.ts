import { defineField, defineType } from 'sanity'
import { languageField } from '../common-fields'
import { alertTextField, readMoreField } from '../soknad/common-fields'

const tittelField = defineField({
  type: 'string',
  name: 'titel',
  title: 'Tittel',
  description: 'Dette er informasjon til redaktør, vises ikke til bruker.',
})

const beskrivelseField = defineField({
  type: 'text',
  name: 'beskrivelse',
  title: 'Beskrivelse',
  description: 'Dette er informasjon til redaktør, vises ikke til bruker.',
  rows: 4,
})

const nokkelField = defineField({
  type: 'string',
  name: 'textId',
  title: 'Tekstnøkkel',
  description: 'Nøkelen til infosiden. Brukes for å identifisere teksten i søknaden.',
})

export const brukerdialogInfoside = defineType({
  type: 'document',
  name: 'brukerdialogInfoside',
  title: 'Infoside',
  initialValue: {
    language: 'nb',
  },
  fields: [
    tittelField,
    beskrivelseField,
    languageField,
    nokkelField,
    defineField({
      type: 'array',
      name: 'body',
      title: 'Innhold',
      description: 'Innholdet som skal vises på infosiden.',
      of: [
        {
          type: 'block',
        },
        { type: alertTextField.name },
        { type: readMoreField.name },
      ],
    }),
  ],
  preview: {
    select: {
      title: tittelField.name,
    },
  },
})
