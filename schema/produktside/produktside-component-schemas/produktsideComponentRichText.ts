import { defineArrayMember, defineField } from 'sanity'
import { produktsideCommonBlock } from '../produktside-block/produktside-block'
import { produktsideAccordionWithRichText } from './produktsideAccordionWithRichText'
import { produktsideButton } from './produktsideButton'
import { produktsideReadMoreWithRichText } from './produktsideReadMoreWithRichText'
import { produktsideAlert } from './produktsideAlert'
import { produktsideAccordionList } from './produktsideAccordionList'

export const produktsideComponentRichText = defineField({
  readOnly: true,
  title: 'Komponent Rich Text',
  name: 'produktsideComponentRichText',
  type: 'array',
  of: [
    produktsideCommonBlock,
    defineArrayMember({ type: produktsideAccordionList.name }),
    defineArrayMember({ type: produktsideAccordionWithRichText.name }),
    defineArrayMember({ type: produktsideAlert.name }),
    defineArrayMember({ type: produktsideButton.name }),
    defineArrayMember({ type: produktsideReadMoreWithRichText.name }),
  ],
})
