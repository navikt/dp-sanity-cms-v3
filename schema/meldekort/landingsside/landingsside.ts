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
      name: 'linkTittelForASe',
      title: 'Link tittel',
      type: 'internationalizedArrayString',
      description:
        'Tittel på lenkekortet. Bruk {{ytelse}} som placeholder for ytelsesnavn (f.eks. "Se dine dagpenger-meldekort").',
      validation: (Rule) => Rule.required(),
      group: 'linkForASe',
    }),
    defineField({
      name: 'linkBeskrivelseForASe',
      title: 'Link beskrivelse',
      type: 'internationalizedArrayText',
      description:
        'Beskrivende tekst under tittelen. Bruk {{ytelse}} for ytelsesnavn og {{dato}} for dato-placeholder (f.eks. "Her finner du oversikt over dine {{ytelse}}-meldekort").',
      validation: (Rule) => Rule.required(),
      group: 'linkForASe',
    }),
    defineField({
      name: 'linkTittelForASende',
      title: 'Link tittel',
      type: 'internationalizedArrayString',
      description:
        'Tittel på lenkekortet. Bruk {{ytelse}} som placeholder for ytelsesnavn (f.eks. "Send {{ytelse}}-meldekort").',
      validation: (Rule) => Rule.required(),
      group: 'linkForASende',
    }),
    defineField({
      name: 'linkBeskrivelseForASende',
      title: 'Link beskrivelse',
      type: 'internationalizedArrayText',
      description:
        'Beskrivende tekst under tittelen. Bruk {{ytelse}} for ytelsesnavn og {{dato}} for dato-placeholder (f.eks. "Send meldekort for perioden som slutter {{dato}}").',
      validation: (Rule) => Rule.required(),
      group: 'linkForASende',
    }),
    defineField({
      name: 'tilleggstekstVedInnsendteMeldekort',
      title: 'Tilleggstekst ved innsendte meldekort',
      type: 'internationalizedArrayString',
      description:
        'Vises kun når bruker har BÅDE meldekort klare til å sendes OG tidligere innsendte meldekort. Eksempel: "Du har også innsendte meldekort."',
      validation: (Rule) => Rule.required(),
      group: 'linkForASende',
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
