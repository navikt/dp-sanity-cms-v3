import { timeline } from './timeline'
import { defineField } from 'sanity'
import { AlertText } from '../../components/alert-text/AlertText'
import { ReadMore } from '../../components/read-more/ReadMore'

export const textIdField = defineField({
  type: 'string',
  name: 'textId',
  title: 'Tekstnøkkel',
  readOnly: false,
})

export const sectionTitleField = defineField({
  type: 'text',
  name: 'title',
  title: 'Seksjonstittel',
  rows: 3,
})

export const questionTextField = defineField({
  type: 'text',
  name: 'text',
  title: 'Spørsmål',
  rows: 3,
})

export const titleTextField = defineField({
  type: 'text',
  name: 'title',
  title: 'Tittel',
  rows: 3,
})

export const answerTextField = defineField({
  type: 'text',
  name: 'text',
  title: 'Svar',
  rows: 3,
})

export const errorMessageTextField = defineField({
  type: 'text',
  name: 'errorMessage',
  title: 'Feilmelding',
  rows: 3,
})

export const unitField = defineField({
  type: 'string',
  name: 'unit',
  title: 'Enhet for inputfelt (f.eks timer, dager)',
})

export const descriptionTextField = defineField({
  type: 'array',
  name: 'description',
  title: 'Beskrivelse',
  of: [
    {
      type: 'block',
    },
    { type: timeline.name },
  ],
})

export const helpTextField = defineField({
  type: 'object',
  name: 'helpText',
  title: 'Hjelpetekst',
  fields: [
    defineField({ type: 'string', name: 'title', title: 'Tittel' }),
    defineField({
      type: 'array',
      name: 'body',
      title: 'Brødtekst',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
})

const alertTextVariants = [
  { value: 'info', title: 'Info' },
  { value: 'warning', title: 'Varsel' },
  { value: 'error', title: 'Feil' },
  { value: 'success', title: 'Vellykket' },
]

export const alertTextField = defineField({
  type: 'object',
  name: 'alertText',
  title: 'Varseltekst',
  fields: [
    defineField({
      type: 'string',
      name: 'type',
      title: 'Type',
      options: {
        list: alertTextVariants,
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({ type: 'string', name: 'title', title: 'Tittel' }),
    defineField({
      type: 'array',
      name: 'body',
      title: 'Brødtekst',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      body: 'body',
    },
  },
  components: {
    preview: AlertText,
  },
})

export const valueTextField = defineField({
  type: 'string',
  name: 'valueText',
  title: 'Verdi',
})

export const readMoreField = defineField({
  type: 'object',
  name: 'readMore',
  title: 'Les mer seksjon',
  fields: [
    defineField({ type: 'string', name: 'title', title: 'Tittel' }),
    defineField({
      type: 'string',
      name: 'size',
      title: 'Tekst størrelse',
      options: {
        list: [
          { value: 'medium', title: 'Medium' },
          { value: 'small', title: 'Small' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
    }),
    defineField({
      type: 'boolean',
      name: 'defaultOpen',
      title: 'Default utvided',
      initialValue: false,
    }),
    defineField({
      type: 'array',
      name: 'body',
      title: 'Brødtekst',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      size: 'size',
      body: 'body',
      defaultOpen: 'defaultOpen',
    },
  },
  components: { preview: ReadMore },
})
