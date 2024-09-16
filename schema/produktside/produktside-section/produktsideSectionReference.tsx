import { MdWeb } from 'react-icons/md'
import { defineField, defineType } from 'sanity'

export const produktsideSectionReferenceName = 'produktsideSectionReference'
const produktsideSectionName = 'produktsideSection'

export const produktsideSectionReference = defineType({
  name: produktsideSectionReferenceName,
  type: 'object',
  title: 'Innholdsseksjon',
  icon: MdWeb,
  fields: [
    defineField({
      name: produktsideSectionName,
      type: 'reference',
      description: 'Innholdsseksjon må være "Published" for å dukke opp i denne lista',
      to: [{ type: produktsideSectionName }],
      options: {
        filter: ({ document }) => {
          // TODO: Fiks typescript
          // @ts-ignore
          const usedReferences = document?.content
            // @ts-ignore
            .filter(({ _type }) => _type === produktsideSectionReferenceName)
            // @ts-ignore
            .map(({ produktsideSection }) => produktsideSection?._ref)

          return {
            filter:
              '!(_id in path("drafts.**")) && !(_id in $usedReferences) && (language == $baseLanguage)',
            params: {
              usedReferences,
              baseLanguage: document?.language,
            },
          }
        },
      },
    }),
  ],
  preview: {
    select: {
      title: 'produktsideSection.title',
    },
    prepare: (selection) => selection,
  },
})
