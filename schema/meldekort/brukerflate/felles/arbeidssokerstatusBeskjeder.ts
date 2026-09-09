import { defineField, defineType } from 'sanity'
import { richTextField, stringField } from './translated-fields'

export const meldekortBrukerflateArbeidssokerstatusBeskjeder = defineType({
  name: 'meldekortBrukerflateArbeidssokerstatusBeskjeder',
  title: 'Beskjeder om arbeidssøkerstatus',
  type: 'document',
  groups: [
    {
      name: 'underUtfylling',
      title: 'Beskjeder under utfyllingsflyten',
      default: true,
    },
    {
      name: 'innsendteMeldekort',
      title: 'Beskjeder for innsendte meldekort',
    },
  ],
  fields: [
    richTextField(
      'duVilVaereRegistrert',
      'Beskjed til bruker som vil fortsette å være registrert',
      'underUtfylling',
    ),
    defineField({
      name: 'duVilBliAvregistrert',
      title: 'Beskjed til bruker som vil bli avregistrert',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'underUtfylling',
      fields: [
        stringField('tittel', 'Tittel på avregistreringsmelding'),
        richTextField('beskrivelse', 'Beskrivelse ved avregistrering'),
      ],
    }),
    richTextField(
      'duSkalIkkeSvarePaSporsmaal',
      'Beskjed til bruker som ikke skal svare på spørsmålet',
      'underUtfylling',
    ),
    richTextField(
      'fraArena',
      'Beskjed om meldekort fra og sendt inn til Arena',
      'innsendteMeldekort',
    ),
    richTextField(
      'utenArbeidssokerSporsmaal',
      'Beskjed om at bruker ikke fikk svare på spørsmålet',
      'innsendteMeldekort',
    ),
    richTextField(
      'etterregistrert',
      'Beskjed om etterregistrert meldekort uten arbeidssøkerspørsmål',
      'innsendteMeldekort',
    ),
  ],
  preview: {
    prepare() {
      return { title: 'Beskjeder om arbeidssøkerstatus' }
    },
  },
})
