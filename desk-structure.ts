// note: context includes `currentUser` and the client
import {
  ListItemBuilder,
  StructureBuilder,
  StructureResolverContext,
} from 'sanity/lib/exports/desk'
import { seksjon } from './schema/soknad/seksjon'
import { faktum } from './schema/soknad/faktum'
import { svaralternativ } from './schema/soknad/svaralternativ'
import { landgruppe } from './schema/soknad/landgruppe'
import { appText } from './schema/soknad/appText'
import { infopage } from './schema/soknad/infopage'
import { dokumentkrav } from './schema/soknad/dokumentkrav'
import { dokumentkravSvar } from './schema/soknad/dokumentkrav-svar'
import { innsynAppText } from './schema/mine-dagpenger/innsynAppText'
import { innsynRichText } from './schema/mine-dagpenger/innsynRichText'
import { innsynLink } from './schema/mine-dagpenger/innsynLink'

export function buildStructure(S: StructureBuilder, context: StructureResolverContext) {
  return S.list()
    .title('Innhold')
    .items([
      S.listItem()
        .title('Dagpengersøknad')
        .child(
          S.list()
            .title('Dagpengersøknad')
            .items([
              createListItem(S, seksjon.name),
              createListItem(S, faktum.name),
              createListItem(S, svaralternativ.name),
              createListItem(S, landgruppe.name),
              createListItem(S, appText.name),
              createListItem(S, infopage.name),
              createListItem(S, dokumentkrav.name),
              createListItem(S, dokumentkravSvar.name),
            ])
        ),

      S.listItem()
        .title('Mine dagpenger')
        .child(
          S.list()
            .title('Mine dagpenger')
            .items([
              createListItem(S, innsynAppText.name),
              createListItem(S, innsynRichText.name),
              createListItem(S, innsynLink.name),
            ])
        ),
    ])
}

function createListItem(S: StructureBuilder, schemaName: string, title?: string): ListItemBuilder {
  const capitalizedTitle = camelCaseToSentenceCase(schemaName)
  return S.listItem()
    .title(title ?? capitalizedTitle)
    .child(
      // Only show the base language variant of each item in schema
      S.documentList()
        .title(`${title ?? capitalizedTitle}`)
        .schemaType(schemaName)
        .filter(`_type == "${schemaName}" && __i18n_lang == $baseLanguage`)
        .params({ baseLanguage: `nb` })
    )
}

function camelCaseToSentenceCase(camelCaseString: string) {
  // Look for capital letters and add a space before them
  let sentenceCaseString = camelCaseString.replace(/([A-Z])/g, ' $1')

  // Make entire string lower case
  sentenceCaseString.toLowerCase()

  // Capitalize the first character of the string
  sentenceCaseString = sentenceCaseString.replace(/^./, function (str) {
    return str.toUpperCase()
  })

  return sentenceCaseString
}
