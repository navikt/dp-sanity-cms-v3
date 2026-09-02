import { defineField, defineType } from 'sanity'

export const opprettMeldekortModal = defineType({
  name: 'opprettMeldekortModal',
  title: 'Opprett meldekort-modal',
  type: 'document',
  groups: [
    { name: 'generelt', title: 'Generelt', default: true },
    { name: 'skjema', title: 'Skjema' },
    { name: 'knapper', title: 'Knapper' },
    { name: 'feilmeldinger', title: 'Feilmeldinger' },
  ],
  fields: [
    defineField({
      name: 'tittel',
      title: 'Tittel',
      type: 'string',
      description: 'F.eks. "Opprett meldekort" eller "Opprett nye meldekort for {{navn}}"',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
    }),
    defineField({
      name: 'fraDato',
      title: 'Fra-dato',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'skjema',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'helpText',
          title: 'Hjelpetekst',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'feilmelding',
          title: 'Feilmelding',
          type: 'string',
          description: 'F.eks. "Du må velge dato"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'tilDato',
      title: 'Til-dato',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'skjema',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'helpText',
          title: 'Hjelpetekst',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'feilmelding',
          title: 'Feilmelding',
          type: 'string',
          description: 'F.eks. "Du må velge dato"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'forklaringstekst',
      title: 'Forklaringstekst',
      type: 'string',
      description:
        'Bruk {{antall}} for antall meldekort. F.eks. "Basert på valgt dato, vil det opprettes {{antall}} nye meldekort."',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
    }),
    defineField({
      name: 'submitKnapp',
      title: 'Bekreft-knapp',
      type: 'string',
      description: 'F.eks. "Opprett"',
      validation: (Rule) => Rule.required(),
      group: 'knapper',
    }),
    defineField({
      name: 'avbrytKnapp',
      title: 'Avbryt-knapp',
      type: 'string',
      description: 'F.eks. "Avbryt"',
      validation: (Rule) => Rule.required(),
      group: 'knapper',
    }),
    defineField({
      name: 'meldekortoversikt',
      title: 'Meldekortoversikt',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'generelt',
      fields: [
        defineField({
          name: 'tittel',
          title: 'Tittel',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'tekst',
          title: 'Tekst',
          type: 'array',
          description: 'Bruk {{antall}} for antall meldekort',
          of: [
            {
              type: 'block',
              styles: [{ title: 'Normal', value: 'normal' }],
              marks: {
                decorators: [{ title: 'Fet', value: 'strong' }],
              },
            },
          ],
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'arsskifteTilleggstekst',
          title: 'Tilleggstekst ved årsskifte',
          type: 'string',
          description: 'Vises kun i tillegg til teksten over når perioden går over et årsskifte',
        }),
        defineField({
          name: 'overlappendePerioderTekst',
          title: 'Tilleggstekst ved overlappende perioder',
          type: 'string',
          description:
            'Vises kun i tillegg til teksten over når perioden overlapper eksisterende meldekort',
        }),
        defineField({
          name: 'ukenummerKolonne',
          title: 'Ukenummer-kolonne',
          type: 'string',
          description: 'F.eks. "Ukenummer"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'periodeKolonne',
          title: 'Periode-kolonne',
          type: 'string',
          description: 'F.eks. "Periode"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'varselKolonne',
          title: 'Varsel-kolonne',
          type: 'string',
          description: 'F.eks. "Varsel"',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'overlappAriaLabel',
          title: 'Overlapp aria-label',
          type: 'string',
          description: 'F.eks. "Overlapper eksisterende meldekort"',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),
    defineField({
      name: 'feilmeldinger',
      title: 'Feilmeldinger',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'feilmeldinger',
      fields: [
        defineField({
          name: 'simulering',
          title: 'Simulering',
          type: 'object',
          description: 'Vises når forhåndsvisning/simulering feiler',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'tittel',
              title: 'Tittel',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'tekst',
              title: 'Tekst',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
        defineField({
          name: 'opprettelse',
          title: 'Opprettelse',
          type: 'object',
          description: 'Vises når selve opprettelsen feiler',
          validation: (Rule) => Rule.required(),
          fields: [
            defineField({
              name: 'tittel',
              title: 'Tittel',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'tekst',
              title: 'Tekst',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Opprett meldekort-modal',
      }
    },
  },
})
