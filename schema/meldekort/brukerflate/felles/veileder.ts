import { defineField, defineType } from 'sanity'
import { richTextField, stringField } from './translated-fields'

const guideSectionFields = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    validation: (Rule) => Rule.required(),
    fields: [stringField('tittel', 'Tittel på forklaringen'), richTextField('tekst', 'Forklaring')],
  })

export const meldekortBrukerflateVeileder = defineType({
  name: 'meldekortBrukerflateVeileder',
  title: 'Meldekort brukerflate - veileder',
  type: 'document',
  groups: [{ name: 'veileder', title: 'Veileder', default: true }],
  fields: [
    stringField('tittel', 'Tittel på veileder'),
    stringField('modalKnappTekst', 'Tekst på knapp for å åpne veileder'),
    guideSectionFields('naarSkalJobbFores', 'Forklaring for når jobb skal føres'),
    guideSectionFields('hvaMedProsentstilling', 'Forklaring når bruker har en prosentstilling'),
    guideSectionFields('reglerForYrket', 'Forklaring om regler for yrket og ulike situasjoner'),
    guideSectionFields('naarSkalDuForeSyk', 'Forklaring for når man skal føre syk'),
    guideSectionFields(
      'naarSkalDuForeFravaer',
      'Forklaring for når man skal føre ferie eller fravær',
    ),
    guideSectionFields(
      'naarSkalDuForeTiltak',
      'Forklaring for når man skal føre tiltak, kurs eller utdanning',
    ),
  ],
  preview: {
    prepare() {
      return { title: 'Meldekort brukerflate - veileder' }
    },
  },
})
