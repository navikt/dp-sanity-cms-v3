import { textIdField, valueTextField } from '../soknad/common-fields'
import { defineType } from 'sanity'

export const rapporteringAppText = defineType({
  type: 'document',
  name: 'rapporteringAppText',
  title: 'Rapportering generelle tekster',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [textIdField, valueTextField],
  preview: {
    select: {
      title: textIdField.name,
      subtitle: valueTextField.name,
    },
  },
})
