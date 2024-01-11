import React from 'react'
import { GtoNOKPreview } from './GtoNOKPreview'
import { FaMoneyBill, FaChild, FaAnchor } from 'react-icons/fa'
import { defineArrayMember } from 'sanity'
import { BarneTilleggPreview } from './BarneTilleggPreview'

const GtoNOKDecorator = {
  title: 'Grunnbeløp til NOK',
  value: 'GtoNOK',
  icon: () => <FaMoneyBill />,
  component: GtoNOKPreview,
}

const BarneTilleggDecorator = {
  title: 'Barnetillegg',
  value: 'Barnetilegg',
  icon: () => <FaChild size={16} style={{ paddingTop: '-2px' }} />,
  component: BarneTilleggPreview,
}

const produktsideBlockDecorators = [
  { title: 'Strong', value: 'strong' },
  { title: 'Emphasis', value: 'em' },
  GtoNOKDecorator,
  BarneTilleggDecorator,
]

const produktsideBlockStyles = [
  { title: 'Normal', value: 'normal' },
  { title: 'H3', value: 'h3' },
  { title: 'H4', value: 'h4' },
  { title: 'H5', value: 'h5' },
  { title: 'H6', value: 'h6' },
  { title: 'Normal M0', value: 'm0' },
  { title: 'Normal M1', value: 'm1' },
]

export const produktsideBlockPlain = defineArrayMember({
  type: 'block',
  styles: [{ title: 'Normal', value: 'normal' }],
  marks: {
    decorators: produktsideBlockDecorators,
  },
})

export const produktsideCommonBlock = defineArrayMember({
  type: 'block',
  styles: produktsideBlockStyles,
  marks: {
    decorators: produktsideBlockDecorators,
    annotations: [
      {
        name: 'anchor',
        title: 'Ankerlenke',
        type: 'object',
        icon: FaAnchor,
        fields: [
          {
            name: 'slug',
            type: 'slug',
            title: 'Ankerlenke',
          },
        ],
      },
    ],
  },
})
