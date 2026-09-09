import { defineField } from 'sanity'

export const stringField = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    type: 'internationalizedArrayString',
    description,
    validation: (Rule) => Rule.required(),
  })

export const richTextField = (name: string, title: string, group?: string, description?: string) =>
  defineField({
    name,
    title,
    type: 'internationalizedArrayBlockContent',
    group,
    description,
    validation: (Rule) => Rule.required(),
    options: { modal: 'popover' },
  })
