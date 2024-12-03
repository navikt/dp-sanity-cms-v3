import { defineField, defineType } from 'sanity'

export const produktsideAlert = defineType({
  readOnly: true,
  name: 'produktsideAlert',
  title: 'Alert',
  type: 'object',
  fields: [
    defineField({
      title: 'Variant',
      name: 'variant',
      type: 'string',
      initialValue: 'info',
      options: {
        list: [
          { title: 'info', value: 'info' },
          { title: 'success', value: 'success' },
          { title: 'warning', value: 'warning' },
          { title: 'error', value: 'error' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Innhold',
      name: 'content',
      type: 'produktsideComponentRichText',
      validation: (Rule) => Rule.required().error('Innhold er påkrevd.'),
    }),
    defineField({
      title: 'Størrelse',
      name: 'size',
      type: 'string',
      initialValue: 'medium',
      options: {
        list: [
          { title: 'small', value: 'small' },
          { title: 'medium', value: 'medium' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Full width',
      name: 'fullWidth',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Inline',
      name: 'inline',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      content: 'content',
      variant: 'variant',
    },
    prepare({ variant }) {
      return {
        title: `(Alert) ${variant}`,
      }
    },
  },
})
