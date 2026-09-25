import { defineField, defineType } from 'sanity'
import { stringField } from './translated-fields'

const activityFields = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    validation: (Rule) => Rule.required(),
    fields: [stringField('kort', 'Kort navn'), stringField('lang', 'Langt navn')],
  })

const weekdayFields = (name: string, title: string) =>
  defineField({
    name,
    title,
    type: 'object',
    validation: (Rule) => Rule.required(),
    fields: [stringField('kort', 'Kort navn'), stringField('lang', 'Langt navn')],
  })

export const meldekortBrukerflateMeldekortdetaljer = defineType({
  name: 'meldekortBrukerflateMeldekortdetaljer',
  title: 'Meldekortdetaljer',
  type: 'document',
  groups: [
    { name: 'grunninfo', title: 'Grunninformasjon', default: true },
    { name: 'status', title: 'Status' },
    { name: 'ukedager', title: 'Ukedager' },
    { name: 'aktiviteter', title: 'Aktiviteter' },
    { name: 'tidsverdi', title: 'Tidsverdi' },
  ],
  fields: [
    {
      ...stringField('tittel', 'Meldekorttittel'),
      description: 'Bruk {{fomUke}} og {{tomUke}} for ukene fra og til.',
      group: 'grunninfo',
    },
    {
      ...stringField('periode', 'Meldekortperiode'),
      description: 'Bruk {{fomDate}} og {{tomDate}} for datoene fra og til.',
      group: 'grunninfo',
    },
    { ...stringField('sendt', 'Sendt'), group: 'grunninfo' },
    { ...stringField('endret', 'Endret'), group: 'grunninfo' },
    { ...stringField('belopUtbetalt', 'Beløp'), group: 'grunninfo' },
    defineField({
      name: 'status',
      title: 'Status',
      type: 'object',
      description: 'Tekster som vises basert på meldekortets status.',
      validation: (Rule) => Rule.required(),
      group: 'status',
      fields: [
        stringField('tilUtfylling', 'Til utfylling', 'Statusen før innsending.'),
        stringField('innsendt', 'Innsendt', 'Sendt inn, men ikke ferdig behandlet.'),
        stringField('ferdig', 'Ferdig', 'Ferdig behandlet.'),
        stringField('endret', 'Endret', 'Et tidligere innsendt meldekort er endret.'),
        stringField('feilet', 'Feilet', 'Behandlingen feilet.'),
      ],
    }),
    defineField({
      name: 'ukedager',
      title: 'Ukedager',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'ukedager',
      fields: [
        weekdayFields('mandag', 'Mandag'),
        weekdayFields('tirsdag', 'Tirsdag'),
        weekdayFields('onsdag', 'Onsdag'),
        weekdayFields('torsdag', 'Torsdag'),
        weekdayFields('fredag', 'Fredag'),
        weekdayFields('lordag', 'Lørdag'),
        weekdayFields('sondag', 'Søndag'),
      ],
    }),
    {
      ...stringField('oppsummering', 'Tittel på oppsummering av aktiviteter'),
      group: 'aktiviteter',
    },
    defineField({
      name: 'aktiviteter',
      title: 'Aktiviteter',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'aktiviteter',
      fields: [
        activityFields('jobb', 'Jobb'),
        activityFields('syk', 'Syk'),
        activityFields('ferie', 'Ferie'),
        activityFields('utdanning', 'Utdanning'),
      ],
    }),
    defineField({
      name: 'tidsverdi',
      title: 'Tidsverdi av aktiviteter',
      type: 'object',
      validation: (Rule) => Rule.required(),
      group: 'tidsverdi',
      fields: [
        stringField('timerSingular', 'Timer (entall)'),
        stringField('timerPlural', 'Timer (flertall)'),
        stringField('dagerSingular', 'Dager (entall)'),
        stringField('dagerPlural', 'Dager (flertall)'),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Meldekortdetaljer' }
    },
  },
})
