import { textIdField, valueTextField } from '../soknad/common-fields'
// import { MdTitle } from "react-icons/md";
import { defineType } from 'sanity'

export const innsynAppText = defineType({
  type: 'document',
  name: 'innsynAppText',
  // icon: MdTitle,
  title: 'Innsyn generelle tekster',
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
