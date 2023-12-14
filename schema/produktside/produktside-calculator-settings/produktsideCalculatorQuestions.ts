import { defineArrayMember, defineField } from 'sanity'
import { produktsideComponentRichText } from '../produktside-component-schemas/produktsideComponentRichText'

export const produktsideCalculatorQuestionIncome = defineArrayMember({
  title: 'Spørsmål om inntekt',
  name: 'incomeQuestion',
  type: 'object',
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Hjelpetekst',
      name: 'description',
      type: produktsideComponentRichText.name,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Feilmelding',
      name: 'errorMessage',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const produktsideCalculatorQuestionHasChildren = defineArrayMember({
  title: 'Spørsmål om man forsørger barn',
  name: 'hasChildrenQuestion',
  type: 'object',
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Hjelpetekst',
      name: 'description',
      type: produktsideComponentRichText.name,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Label for første radioknapp',
      name: 'radioButtonLabel1',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Label for andre radioknapp',
      name: 'radioButtonLabel2',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Feilmelding',
      name: 'errorMessage',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const produktsideCalculatorQuestionNumberOfChildren = defineArrayMember({
  title: 'Spørsmål om antall barn som blir forsørget',
  name: 'numberOfChildrenQuestion',
  type: 'object',
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Hjelpetekst',
      name: 'firstOption',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Feilmelding',
      name: 'errorMessage',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})

export const produktsideCalculatorQuestionIncomePeriod = defineArrayMember({
  title: 'Spørsmål om inntektsperiode',
  name: 'incomePeriodQuestion',
  type: 'object',
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Hjelpetekst "hvilken inntektsperiode"',
      name: 'description1',
      type: produktsideComponentRichText.name,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Hjelpetekst "disse inntektene avgjør"',
      name: 'description2',
      type: produktsideComponentRichText.name,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Label for første radioknapp',
      name: 'radioButtonLabel1',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Tittel for første radioknapp',
      name: 'option1title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Label for andre radioknapp',
      name: 'radioButtonLabel2',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Tittel for andre radioknapp',
      name: 'option2title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Feilmelding',
      name: 'errorMessage',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
