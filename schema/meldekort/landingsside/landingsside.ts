import { defineField, defineType } from 'sanity'

export const meldekortLandingsside = defineType({
  name: 'meldekortLandingsside',
  title: 'Meldekort Landingsside',
  type: 'document',
  groups: [
    { name: 'innhold', title: 'Innhold', default: true },
    { name: 'linkForASe', title: 'Link for å se' },
    { name: 'linkForASende', title: 'Link for å sende' },
  ],
  fields: [
    defineField({
      name: 'tittel',
      title: 'Tittel',
      type: 'internationalizedArrayString',
      description: 'Hovedoverskrift for landingssiden',
      validation: (Rule) => Rule.required(),
      group: 'innhold',
    }),
    defineField({
      name: 'body',
      title: 'Bunntekst',
      type: 'internationalizedArrayBlockContent',
      description: 'Bunntekst på landingssiden (vises under lenkekortene)',
      validation: (Rule) => Rule.required(),
      options: {
        editModal: 'popover',
      },
      group: 'innhold',
    }),
    defineField({
      name: 'linkForASe',
      title: 'Link for å se',
      type: 'object',
      description:
        'Lenkekort for å se meldekort. Bruk {{ytelse}} for ytelsesnavn og {{dato}} for dato-placeholder.',
      validation: (Rule) => Rule.required(),
      group: 'linkForASe',
      fields: [
        defineField({
          name: 'tittel',
          title: 'Tittel',
          type: 'internationalizedArrayString',
          description:
            'Tittel på lenkekortet. Bruk {{ytelse}} som placeholder for ytelsesnavn (f.eks. "Se dine dagpenger-meldekort").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'beskrivelse',
          title: 'Beskrivelse',
          type: 'internationalizedArrayText',
          description:
            'Beskrivende tekst under tittelen. Bruk {{ytelse}} for ytelsesnavn og {{dato}} for dato-placeholder (f.eks. "Her finner du oversikt over dine {{ytelse}}-meldekort").',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'linkForASende',
      title: 'Link for å sende',
      type: 'object',
      description:
        'Lenkekort for å sende meldekort. Bruk {{ytelse}} for ytelsesnavn og {{dato}} for dato-placeholder.',
      validation: (Rule) => Rule.required(),
      group: 'linkForASende',
      fields: [
        defineField({
          name: 'tittel',
          title: 'Tittel',
          type: 'internationalizedArrayString',
          description:
            'Tittel på lenkekortet. Bruk {{ytelse}} som placeholder for ytelsesnavn (f.eks. "Send {{ytelse}}-meldekort").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'beskrivelse',
          title: 'Beskrivelse',
          type: 'internationalizedArrayText',
          description:
            'Beskrivende tekst under tittelen. Bruk {{ytelse}} for ytelsesnavn og {{dato}} for dato-placeholder (f.eks. "Send meldekort for perioden som slutter {{dato}}").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'tilleggstekstVedInnsendteMeldekort',
          title: 'Tilleggstekst ved innsendte meldekort',
          type: 'internationalizedArrayString',
          description:
            'Vises kun når bruker har BÅDE meldekort klare til å sendes OG tidligere innsendte meldekort. Eksempel: "Du har også innsendte meldekort."',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'linkForAFylleUt',
      title: 'Link for å fylle ut',
      type: 'object',
      description:
        'Lenkekort for å fylle ut meldekort. Bruk {{ytelse}} for ytelsesnavn og {{dato}} for dato-placeholder.',
      validation: (Rule) => Rule.required(),
      group: 'linkForAFylleUt',
      fields: [
        defineField({
          name: 'tittel',
          title: 'Tittel',
          type: 'internationalizedArrayString',
          description:
            'Tittel på lenkekortet. Bruk {{ytelse}} som placeholder for ytelsesnavn (f.eks. "Fyll ut dine dagpenger-meldekort").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'beskrivelse',
          title: 'Beskrivelse',
          type: 'internationalizedArrayText',
          description:
            'Beskrivende tekst under tittelen. Bruk {{ytelse}} for ytelsesnavn og {{dato}} for dato-placeholder (f.eks. "Her finner du oversikt over dine {{ytelse}}-meldekort").',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Meldekort Landingsside',
      }
    },
  },
})
