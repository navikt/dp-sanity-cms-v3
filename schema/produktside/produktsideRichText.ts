import { defineArrayMember, defineField } from 'sanity'
import { produktsideSectionReferenceName } from './produktsideSection/produktsideSectionReference'

export const produktsideRichText = defineField({
  title: 'Produktside Rich Text',
  name: 'produktsideRichText',
  type: 'array',
  of: [defineArrayMember({ type: produktsideSectionReferenceName })],
})
