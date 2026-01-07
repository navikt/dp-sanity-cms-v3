import { defineField, defineType } from 'sanity'
import { languageField } from '../common-fields'

export const settingIdField = defineField({
  type: 'string',
  name: 'settingId',
  title: 'Setting nøkkel',
  readOnly: false,
})

export const settingValueField = defineField({
  type: 'string',
  name: 'settingValue',
  title: 'Setting verdi',
  readOnly: false,
})

export const mineDagpengerSetting = defineType({
  type: 'document',
  name: 'mineDagpengerSetting',
  title: 'Mine dagpenger innstillinger',
  initialValue: {
    language: 'nb',
  },
  fields: [languageField, settingIdField, settingValueField],
  preview: {
    select: {
      title: settingIdField.name,
      subtitle: settingValueField.name,
    },
  },
})
