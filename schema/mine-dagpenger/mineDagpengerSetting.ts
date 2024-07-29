import { defineField, defineType } from 'sanity'

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
  title: 'Mine dagpenger settings',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [settingIdField, settingValueField],
  preview: {
    select: {
      title: settingIdField.name,
      subtitle: settingValueField.name,
    },
  },
})
