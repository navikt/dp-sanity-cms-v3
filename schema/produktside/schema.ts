import { produktsideButton } from './produktside-component-schemas/produktsideButton'
import { produktsideFilteredContent } from './produktside-component-schemas/produktsideFilteredContent'
import { produktsideFilterMenu } from './produktside-component-schemas/produktsideFilterMenu'
import { produktsideKortFortalt } from './produktsideKortFortalt'
import { produktsideRichText } from './produktsideRichText'
import { produktsideSection } from './produktsideSection/produktsideSection'
import { produktsideSectionReference } from './produktsideSection/produktsideSectionReference'
import { produktsideSectionRichText } from './produktsideSection/produktsideSectionRichText'
import { produktsideSettings } from './produktsideSettings'
import { produktsideGeneralText } from './produktsideGeneralText'
import { produktsideAccordionWithRichText } from './produktside-component-schemas/produktsideAccordionWithRichText'
import { produktsideReadMoreWithRichText } from './produktside-component-schemas/produktsideReadMoreWithRichText'
import { produktsideComponentRichText } from './produktside-component-schemas/produktsideComponentRichText'
import { produktsideReadMore } from './produktside-component-schemas/produktsideReadMore'
import { produktsideAccordion } from './produktside-component-schemas/produktsideAccordion'
import { produktsideFilterSection } from './produktsideFilterSection'
import { produktsideContactOptions } from './produtktsideContactOptions'
import { produktsideCalculator } from './produktside-component-schemas/produktsideCalculator'
import { produktsideSEO } from './produktsideSEO'

const componentSchemas = [
  produktsideAccordion,
  produktsideAccordionWithRichText,
  produktsideButton,
  produktsideCalculator,
  produktsideComponentRichText,
  produktsideFilteredContent,
  produktsideFilterMenu,
  produktsideReadMore,
  produktsideReadMoreWithRichText,
]

export const produktsideSchemas = [
  ...componentSchemas,
  produktsideContactOptions,
  produktsideFilterSection,
  produktsideKortFortalt,
  produktsideGeneralText,
  produktsideRichText,
  produktsideSection,
  produktsideSectionReference,
  produktsideSectionRichText,
  produktsideSettings,
  produktsideSEO,
]

export {
  produktsideAccordion,
  produktsideAccordionWithRichText,
  produktsideButton,
  produktsideCalculator,
  produktsideComponentRichText,
  produktsideContactOptions,
  produktsideFilterSection,
  produktsideFilteredContent,
  produktsideFilterMenu,
  produktsideGeneralText,
  produktsideKortFortalt,
  produktsideReadMore,
  produktsideReadMoreWithRichText,
  produktsideRichText,
  produktsideSection,
  produktsideSectionReference,
  produktsideSectionRichText,
  produktsideSettings,
  produktsideSEO,
}
