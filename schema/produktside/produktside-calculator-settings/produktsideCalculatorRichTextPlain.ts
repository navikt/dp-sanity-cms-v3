import { defineArrayMember, defineField } from 'sanity'
import { produktsideBlockPlain } from '../produktside-block/produktside-block'

const produktsideCalculatorVariables = defineArrayMember({
  type: 'object',
  title: 'Kalkulator variabler',
  name: 'produktsideCalculatorVariable',
  fields: [
    defineField({
      type: 'string',
      name: 'variable',
      options: {
        list: [
          'antall-barn',
          'barnetillegg-per-2-uker',
          'dagpenger-per-2-uker',
          'dagpenger-mellom-0-og-6G',
          'total-per-2-uker',
        ],
      },
    }),
    defineField({
      type: 'boolean',
      title: 'Fet skrift',
      name: 'strongText',
      initialValue: true,
    }),
  ],
})

const produktsideCalculatorBlockPlain = defineArrayMember({
  ...produktsideBlockPlain,
  of: [produktsideCalculatorVariables],
})

export const produktsideCalculatorRichTextPlain = defineField({
  title: 'Komponent Rich Text',
  name: 'produktsideCalculatorRichTextPlain',
  type: 'array',
  of: [produktsideCalculatorBlockPlain],
})
