import { defineField } from 'sanity'
import { languageField } from '../common-fields'
import { textIdField } from '../soknad/common-fields'
import { richTextField } from './common-fields'

const titleField = defineField({
  type: 'string',
  name: 'title',
  title: 'Tittel',
})

const fromField = defineField({
  type: 'datetime',
  name: 'from',
  title: 'Fra',
})

const toField = defineField({
  type: 'datetime',
  name: 'to',
  title: 'Til',
})

const variantField = defineField({
  type: 'string',
  name: 'variant',
  title: 'Alvorlighetsgrad',
  initialValue: 'info',
  options: {
    list: [
      { title: 'Suksess', value: 'success' },
      { title: 'Informasjon', value: 'info' },
      { title: 'Advarsel', value: 'warning' },
      { title: 'Feil', value: 'error' },
    ],
    layout: 'radio',
  },
})

const enabledField = defineField({
  type: 'boolean',
  name: 'enabled',
  title: 'Skal vises',
  initialValue: true,
})

export const rapporteringMessage = {
  type: 'document',
  name: 'rapporteringMessage',
  title: 'Driftsmelding',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    { ...textIdField, validation: (rule: { required: () => any }) => rule.required() },
    titleField,
    { ...richTextField, validation: (rule: { required: () => any }) => rule.required() },
    fromField,
    toField,
    variantField,
    enabledField,
  ],
  preview: {
    select: {
      title: textIdField.name,
      subtitle: titleField.name ?? fromField.name,
    },
  },
}
