import { PortableTextObject, defineArrayMember, defineField, defineType } from 'sanity'
import { produktsideComponentRichText } from '../produktside-component-schemas/produktsideComponentRichText'
import {
  produktsideCalculatorQuestionHasChildren,
  produktsideCalculatorQuestionIncome,
  produktsideCalculatorQuestionNumberOfChildren,
} from './produktsideCalculatorQuestions'

export const produktsideCalculatorSettings = defineType({
  name: 'produktsideCalculatorSettings',
  title: 'Kalkulator',
  type: 'document',
  i18n: true,
  initialValue: {
    __i18n_lang: 'nb',
  },
  fields: [
    defineField({
      title: 'Tittel',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'questions',
      type: 'array',
      title: 'Spørsmål i kalkulatoren',
      of: [
        produktsideCalculatorQuestionIncome,
        produktsideCalculatorQuestionHasChildren,
        produktsideCalculatorQuestionNumberOfChildren,
      ],
      options: {
        sortable: false,
      },
      validation: (Rule) =>
        Rule.required()
          .length(3)
          .custom((questions?: PortableTextObject[]) => {
            if (
              !(
                questions?.find(({ _type }) => _type === 'incomeQuestion') &&
                questions?.find(({ _type }) => _type === 'hasChildrenQuestion') &&
                questions?.find(({ _type }) => _type === 'numberOfChildrenQuestion')
              )
            ) {
              return 'Lista må inneholde 3 unike spørsmål'
            }

            return true
          }),
    }),
    defineField({
      title: 'Liste med beregningsdetaljer av dagpenger',
      name: 'calculationList',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'calculationListItem',
          title: 'Beregningsliste',
          fields: [
            defineField({
              title: 'Begrep',
              type: 'string',
              name: 'term',
            }),
            defineField({
              title: 'Beskrivelse',
              type: 'produktsideCalculatorRichTextPlain',
              name: 'description',
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title:
        '(IKKE I BRUK, GAMMEL DESIGN AV KALKULATOR) Informasjonsboks når bruker har rett til dagpenger',
      name: 'bottomContentOnSufficientIncome',
      type: produktsideComponentRichText.name,
      hidden: true,
    }),
    defineField({
      title:
        '(IKKE I BRUK, GAMMEL DESIGN AV KALKULATOR) Informasjonsboks når bruker IKKE har rett til dagpenger',
      name: 'bottomContentOnInsufficientIncome',
      type: produktsideComponentRichText.name,
      hidden: true,
    }),
  ],
})
