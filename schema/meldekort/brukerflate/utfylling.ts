import { defineField, defineType } from 'sanity'
import { richTextField, stringField } from './felles/translated-fields'

const questionFields = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    description: 'Spørsmål og svaralternativer som vises som en radioknappgruppe.',
    validation: (Rule) => Rule.required(),
    fields: [
      stringField('tittel', 'Spørsmål i radioknappgruppen'),
      stringField('ja', 'Svaralternativ: Ja'),
      stringField('nei', 'Svaralternativ: Nei'),
    ],
  })

const guideFields = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    validation: (Rule) => Rule.required(),
    fields: [richTextField('tekst', 'Veiledning')],
  })

export const meldekortBrukerflateUtfylling = defineType({
  name: 'meldekortBrukerflateUtfylling',
  title: 'Utfylling av meldekort',
  type: 'document',
  groups: [
    { name: 'skalMeldeNoe', title: 'Steg: Skal du melde noe?', default: true },
    { name: 'aktiviteter', title: 'Steg: Registrer aktiviteter' },
    {
      name: 'arbeidssokerstatus',
      title: 'Steg: Vil du fortsatt være registrert som arbeidssøker?',
    },
    { name: 'begrunnelse', title: 'Steg: Begrunnelse for endring' },
    { name: 'seOver', title: 'Steg: Se over' },
  ],
  fields: [
    defineField({
      name: 'skalMeldeNoe',
      title: 'Steg: Skal du melde noe?',
      type: 'object',
      description:
        'Innholdet som vises på steget: sidetittel, brødtekst og spørsmål med radioknapper.',
      validation: (Rule) => Rule.required(),
      group: 'skalMeldeNoe',
      fields: [
        stringField('tittel', 'Sidetittel for steget'),
        stringField('tekst', 'Brødtekst på steget'),
        questionFields('sporsmaal', 'Radioknappgruppe'),
      ],
    }),
    defineField({
      name: 'registrerAktiviteter',
      title: 'Steg: Registrer aktiviteter',
      type: 'object',
      description:
        'Innholdet som vises på steget: sidetittel, beskrivelse, veiledning og aktivitetsvarsler.',
      validation: (Rule) => Rule.required(),
      group: 'aktiviteter',
      fields: [
        stringField('tittel', 'Sidetittel for steget'),
        stringField('beskrivelse', 'Brødtekst på steget'),
        defineField({
          name: 'veiledning',
          title: 'Veiledning for aktivitetene',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            guideFields('jobb', 'Veiledning for jobb'),
            guideFields('syk', 'Veiledning for syk'),
            guideFields('ferie', 'Veiledning for ferie'),
            guideFields('utdanning', 'Veiledning for utdanning'),
          ],
        }),
        defineField({
          name: 'aktivitetErstattet',
          title: 'Varsel når en aktivitet erstattes',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            stringField('tittel', 'Tittel på varselet'),
            stringField('tekst', 'Tekst i varselet'),
          ],
        }),
      ],
    }),
    defineField({
      name: 'arbeidssokerstatusSporsmaal',
      title: 'Steg: Vil du fortsatt være registrert som arbeidssøker?',
      type: 'object',
      description: 'Spørsmål og svaralternativer for arbeidssøkerstatus.',
      validation: (Rule) => Rule.required(),
      group: 'arbeidssokerstatus',
      fields: [
        stringField('tittel', 'Spørsmål om arbeidssøkerstatus'),
        defineField({
          name: 'alternativer',
          title: 'Svaralternativer',
          description: 'Svaralternativer som vises som en radioknappgruppe.',
          type: 'object',
          validation: (Rule) => Rule.required(),
          fields: [
            stringField('ja', 'Svaralternativ: Ja'),
            stringField('nei', 'Svaralternativ: Nei'),
          ],
        }),
      ],
    }),
    defineField({
      name: 'manglendeAktivitet',
      title: 'Varsel når brukeren ikke har ført opp aktivitet',
      type: 'object',
      description: 'Meldingen som vises dersom brukeren ikke har registrert noen aktivitet.',
      validation: (Rule) => Rule.required(),
      group: 'aktiviteter',
      fields: [
        stringField('tittel', 'Tittel på beskjeden'),
        stringField('beskrivelse', 'Beskrivelse av beskjeden'),
      ],
    }),
    defineField({
      name: 'begrunnelseForEndring',
      title: 'Steg: Begrunnelse for endring av meldekort',
      type: 'object',
      description:
        'Innholdet som vises på steget: sidetittel, beskrivelse og tekst for svaralternativene.',
      validation: (Rule) => Rule.required(),
      group: 'begrunnelse',
      fields: [
        stringField('tittel', 'Sidetittel for steget'),
        stringField('beskrivelse', 'Brødtekst på steget'),
        stringField('alternativer', 'Svaralternativer for begrunnelsen'),
      ],
    }),
    defineField({
      name: 'seOver',
      title: 'Steg: Se over før innsending',
      type: 'object',
      description: 'Meldinger som vises når brukeren går gjennom meldekortet før det sendes inn.',
      validation: (Rule) => Rule.required(),
      group: 'seOver',
      fields: [
        stringField('ikkeSendtInnBeskjed', 'Beskjed når meldekortet ikke er sendt inn'),
        stringField('jegHarSettOverBeskjed', 'Beskjed når brukeren har sett over meldekortet'),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Utfylling av meldekort' }
    },
  },
})
