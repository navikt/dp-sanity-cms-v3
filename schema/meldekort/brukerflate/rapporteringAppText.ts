import { textIdField, valueTextField } from '../../soknad/common-fields'
import { languageField } from '../../common-fields'

export const rapporteringAppText = {
  type: 'document',
  name: 'rapporteringAppText',
  title: 'Rapportering generelle tekster',
  fields: [languageField, textIdField, valueTextField],
  initialValue: {
    language: 'nb',
  },
  preview: {
    select: {
      title: textIdField.name,
      subtitle: valueTextField.name,
    },
  },
}
