import React from 'react'
import { GtoNOKPreview } from './GtoNOKPreview'
import { FaMoneyBill } from 'react-icons/fa'
import { defineArrayMember } from 'sanity'

const GtoNOKDecorator = {
  title: 'Grunnbeløp til NOK',
  value: 'GtoNOK',
  icon: () => <FaMoneyBill />,
  component: GtoNOKPreview,
}

const produktsideBlockDecorators = [
  { title: 'Strong', value: 'strong' },
  { title: 'Emphasis', value: 'em' },
  GtoNOKDecorator,
]

const produktsideBlockStyles = [
  { title: 'Normal', value: 'normal' },
  { title: 'H3', value: 'h3' },
  { title: 'H4', value: 'h4' },
  { title: 'H5', value: 'h5' },
  { title: 'H6', value: 'h6' },
  { title: 'Normal M1', value: 'm1' },
]

export const produktsideCommonBlock = defineArrayMember({
  type: 'block',
  styles: produktsideBlockStyles,
  marks: {
    decorators: produktsideBlockDecorators,
  },
})
