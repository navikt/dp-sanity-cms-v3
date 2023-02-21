import { produktsideSectionReferenceName } from './produktsideSectionReference'
import { produktsideFilteredContent } from '../produktside-component-schemas/produktsideFilteredContent'
import { produktsideFilterMenu } from '../produktside-component-schemas/produktsideFilterMenu'
import { produktsideButton } from '../schema'
import { produktsideAccordionWithRichText } from '../produktside-component-schemas/produktsideAccordionWithRichText'
import { produktsideReadMoreWithRichText } from '../produktside-component-schemas/produktsideReadMoreWithRichText'
import { produktsideAccordion } from '../produktside-component-schemas/produktsideAccordion'
import { produktsideReadMore } from '../produktside-component-schemas/produktsideReadMore'
import { defineArrayMember, defineField } from 'sanity'
import { produktsideCommonBlock } from '../produktside-block/produktside-block'

export const produktsideSectionRichText = defineField({
  title: 'Innholdsseksjon Rich Text',
  name: 'produktsideSectionRichText',
  type: 'array',
  of: [
    produktsideCommonBlock,
    defineArrayMember({ type: produktsideSectionReferenceName }),
    defineArrayMember({ type: produktsideAccordion.name }),
    defineArrayMember({ type: produktsideAccordionWithRichText.name }),
    defineArrayMember({ type: produktsideButton.name }),
    defineArrayMember({ type: produktsideReadMore.name }),
    defineArrayMember({ type: produktsideReadMoreWithRichText.name }),
    defineArrayMember({ type: produktsideFilteredContent.name }),
    defineArrayMember({ type: produktsideFilterMenu.name }),
  ],
})
