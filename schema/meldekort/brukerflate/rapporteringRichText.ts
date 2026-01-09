import { textIdField } from '../../soknad/common-fields'
import { richTextField } from './common-fields'
import { languageField } from '../../common-fields'

export const rapporteringRichText = {
  type: 'document',
  name: 'rapporteringRichText',
  title: 'Rik tekst',
  initialValue: {
    language: 'nb',
  },
  fields: [languageField, textIdField, richTextField],
  preview: {
    select: {
      title: textIdField.name,
    },
  },
}
