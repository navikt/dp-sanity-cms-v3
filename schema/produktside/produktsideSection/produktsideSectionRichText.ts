import { defineArrayMember, defineField } from 'sanity'
import { produktsideCommonBlock } from '../produktside-block/produktside-block'
import { produktsideAccordion } from '../produktside-component-schemas/produktsideAccordion'
import { produktsideAccordionWithRichText } from '../produktside-component-schemas/produktsideAccordionWithRichText'
import { produktsideAlert } from '../produktside-component-schemas/produktsideAlert'
import { produktsideButton } from '../produktside-component-schemas/produktsideButton'
import { produktsideCalculator } from '../produktside-component-schemas/produktsideCalculator'
import { produktsideFilterMenu } from '../produktside-component-schemas/produktsideFilterMenu'
import { produktsideFilteredContent } from '../produktside-component-schemas/produktsideFilteredContent'
import { produktsideMicroCards } from '../produktside-component-schemas/produktsideMicroCards'
import { produktsideReadMore } from '../produktside-component-schemas/produktsideReadMore'
import { produktsideReadMoreWithRichText } from '../produktside-component-schemas/produktsideReadMoreWithRichText'
import { produktsideSectionReferenceName } from './produktsideSectionReference'

export const produktsideSectionRichText = defineField({
  title: 'Innholdsseksjon Rich Text',
  name: 'produktsideSectionRichText',
  type: 'array',
  of: [
    produktsideCommonBlock,
    defineArrayMember({ type: produktsideSectionReferenceName }),
    defineArrayMember({ type: produktsideAccordion.name }),
    defineArrayMember({ type: produktsideAccordionWithRichText.name }),
    defineArrayMember({ type: produktsideAlert.name }),
    defineArrayMember({ type: produktsideButton.name }),
    defineArrayMember({ type: produktsideCalculator.name }),
    defineArrayMember({ type: produktsideReadMore.name }),
    defineArrayMember({ type: produktsideReadMoreWithRichText.name }),
    defineArrayMember({ type: produktsideFilteredContent.name }),
    defineArrayMember({ type: produktsideFilterMenu.name }),
    defineArrayMember({ type: produktsideMicroCards.name }),
  ],
})
