import { defineField, defineType } from 'sanity'
import { richTextField, stringField } from './felles/translated-fields'

const messageFields = (name: string, title: string, description: string, group?: string) =>
  defineField({
    name,
    title,
    type: 'object',
    description,
    group,
    validation: (Rule) => Rule.required(),
    fields: [stringField('tittel', 'Tittel på meldingen'), richTextField('tekst', 'Meldingstekst')],
  })

export const meldekortBrukerflateKvittering = defineType({
  name: 'meldekortBrukerflateKvittering',
  title: 'Kvittering for innsendt meldekort',
  type: 'document',
  groups: [
    { name: 'suksess', title: 'Suksessmelding', default: true },
    { name: 'handlinger', title: 'Handlinger' },
    { name: 'feilUtbetaling', title: 'Melding: Feil utbetaling' },
  ],
  fields: [
    defineField({
      name: 'suksess',
      title: 'Melding om at meldekortet er sendt inn',
      type: 'object',
      description: 'Vises når meldekortet er sendt inn.',
      validation: (Rule) => Rule.required(),
      group: 'suksess',
      fields: [
        stringField('tittel', 'Tittel på suksessmeldingen'),
        richTextField('tekst', 'Tekst i suksessmeldingen'),
      ],
    }),
    defineField({
      name: 'handlinger',
      title: 'Lenker og knapper på kvitteringssiden',
      type: 'object',
      description: 'Tekster for handlinger brukeren kan gjøre etter innsending.',
      validation: (Rule) => Rule.required(),
      group: 'handlinger',
      fields: [
        stringField('seOverHvaDuSendteInn', 'Se over hva du sendte inn'),
        stringField('skrivUt', 'Skriv ut'),
      ],
    }),
    messageFields(
      'utbetalingenErFeil',
      'Melding: Mener du at utbetalingen er feil?',
      'Vises når brukeren skal få hjelp til å melde fra om feil i utbetalingen.',
      'feilUtbetaling',
    ),
  ],
  preview: {
    prepare() {
      return { title: 'Kvittering for innsendt meldekort' }
    },
  },
})
