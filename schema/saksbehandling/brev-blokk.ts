import { defineField, defineType } from 'sanity'
import { textIdField, titleTextField } from '../soknad/common-fields'
import { behandlingOpplysning } from './behandling-opplysning'
import { BulbOutlineIcon } from '@sanity/icons'
import { languageField } from '../common-fields'
import { regelmotorOpplysning } from './regelmotor-opplysning'

export const brevBlokk = defineType({
  type: 'document',
  name: 'brevBlokk',
  title: 'Brev Blokk',
  initialValue: {
    language: 'nb',
  },
  fields: [
    languageField,
    textIdField,
    titleTextField,
    {
      type: 'boolean',
      name: 'utvidetBeskrivelse',
      title: 'Utvidet beskrivelse',
      initialValue: false,
    },
    {
      title: 'Innhold',
      name: 'innhold',
      type: 'array',
      of: [
        {
          type: 'block',
          of: [
            defineField({
              name: 'regelmotorOpplysningReference',
              type: 'reference',
              to: [{ type: regelmotorOpplysning.name }],
              icon: BulbOutlineIcon,
              title: 'Reglemotor opplysning',
            }),
            defineField({
              name: 'opplysningReference',
              type: 'reference',
              to: [{ type: behandlingOpplysning.name }],
              icon: BulbOutlineIcon,
              title: 'Opplysning',
            }),
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: textIdField.name,
    },
  },
})
