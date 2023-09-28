import { defineArrayMember, defineField } from 'sanity'
import { produktsideCommonBlock } from '../produktside-block/produktside-block'
import { produktsideAccordionWithRichText } from '../produktside-component-schemas/produktsideAccordionWithRichText'
import { produktsideAlert } from '../produktside-component-schemas/produktsideAlert'
import { produktsideButton } from '../produktside-component-schemas/produktsideButton'
import { produktsideCalculator } from '../produktside-component-schemas/produktsideCalculator'
import { produktsideFilterMenu } from '../produktside-component-schemas/produktsideFilterMenu'
import { produktsideFilteredContent } from '../produktside-component-schemas/produktsideFilteredContent'
import { produktsideMicroCards } from '../produktside-component-schemas/produktsideMicroCards'
import { produktsideReadMoreWithRichText } from '../produktside-component-schemas/produktsideReadMoreWithRichText'
import { produktsideSectionReferenceName } from './produktsideSectionReference'
import { produktsideAccordionList } from '../schema'

export const produktsideSectionRichText = defineField({
  title: 'Innholdsseksjon Rich Text',
  name: 'produktsideSectionRichText',
  type: 'array',
  of: [
    produktsideCommonBlock,
    defineArrayMember({ type: produktsideSectionReferenceName }),
    defineArrayMember({ type: produktsideAccordionList.name }),
    defineArrayMember({ type: produktsideAccordionWithRichText.name }),
    defineArrayMember({ type: produktsideAlert.name }),
    defineArrayMember({ type: produktsideButton.name }),
    defineArrayMember({ type: produktsideCalculator.name }),
    defineArrayMember({ type: produktsideReadMoreWithRichText.name }),
    defineArrayMember({ type: produktsideFilteredContent.name }),
    defineArrayMember({ type: produktsideFilterMenu.name }),
    defineArrayMember({ type: produktsideMicroCards.name }),
  ],
})
