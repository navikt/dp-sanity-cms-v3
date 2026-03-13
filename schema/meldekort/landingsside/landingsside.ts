import { defineField, defineType } from 'sanity'

export const meldekortLandingsside = defineType({
  name: 'meldekortLandingsside',
  title: 'Meldekort Landingsside',
  type: 'document',
  groups: [
    { name: 'innhold', title: 'Innhold', default: true },
    { name: 'ytelserGruppe', title: 'Ytelser' },
    { name: 'linkForASe', title: 'Link for å se' },
    { name: 'linkForASende', title: 'Link for å sende' },
    { name: 'linkForAFylleUt', title: 'Link for å fylle ut' },
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
      name: 'emptyStateTekst',
      title: 'Tekst for tomt state',
      type: 'internationalizedArrayBlockContent',
      description: 'Tekst som vises når det ikke finnes innhold på landingssiden',
      validation: (Rule) => Rule.required(),
      options: {
        editModal: 'popover',
      },
      group: 'innhold',
    }),
    defineField({
      name: 'bunntekst',
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
      name: 'ytelser',
      title: 'Ytelser',
      type: 'object',
      description:
        'Navn på ytelser som brukes i lenkekorttekster. Disse erstatter {{ytelse}} placeholder.',
      validation: (Rule) => Rule.required(),
      group: 'ytelserGruppe',
      fields: [
        defineField({
          name: 'dagpenger',
          title: 'Dagpenger',
          type: 'internationalizedArrayString',
          description:
            'Navn på ytelsen "dagpenger" (f.eks. nb: "dagpenger", en: "unemployment benefits").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'aap',
          title: 'AAP',
          type: 'internationalizedArrayString',
          description: 'Navn på ytelsen "AAP" (f.eks. nb: "AAP", en: "AAP").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'tiltakspenger',
          title: 'Tiltakspenger',
          type: 'internationalizedArrayString',
          description:
            'Navn på ytelsen "tiltakspenger" (f.eks. nb: "tiltakspenger", en: "participation allowance").',
          validation: (Rule) => Rule.required(),
        }),
      ],
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
      description: 'Lenkekort for å sende meldekort. Bruk {{ytelse}} for ytelsesnavn.',
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
            'Beskrivende tekst under tittelen. Bruk {{ytelse}} for ytelsesnavn (f.eks. "Send meldekort for perioden").',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'fristTag',
          title: 'Frist-tag',
          type: 'internationalizedArrayString',
          description:
            'Tag som vises på lenkekortet med frist-dato. Bruk {{dato}} som placeholder for datoen (f.eks. "Fristen for å sende meldekortet er {{dato}}.").',
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
