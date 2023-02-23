import { defineArrayMember, defineField } from 'sanity'
import { produktsideAccordion } from './produktsideAccordion'
import { produktsideAccordionWithRichText } from './produktsideAccordionWithRichText'
import { produktsideButton } from './produktsideButton'
import { produktsideReadMore } from './produktsideReadMore'
import { produktsideReadMoreWithRichText } from './produktsideReadMoreWithRichText'
import { produktsideCommonBlock } from '../produktside-block/produktside-block'
import { produktsideCalculator } from './produktsideCalculator'

export const produktsideComponentRichText = defineField({
  title: 'Komponent Rich Text',
  name: 'produktsideComponentRichText',
  type: 'array',
  of: [
    produktsideCommonBlock,
    defineArrayMember({ type: produktsideAccordion.name }),
    defineArrayMember({ type: produktsideAccordionWithRichText.name }),
    defineArrayMember({ type: produktsideButton.name }),
    defineArrayMember({ type: produktsideCalculator.name }),
    defineArrayMember({ type: produktsideReadMore.name }),
    defineArrayMember({ type: produktsideReadMoreWithRichText.name }),
  ],
})
