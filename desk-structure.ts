// note: context includes `currentUser` and the client

import { seksjon } from './schema/soknad/seksjon'
import { faktum } from './schema/soknad/faktum'
import { svaralternativ } from './schema/soknad/svaralternativ'
import { landgruppe } from './schema/soknad/landgruppe'
import { appText } from './schema/soknad/appText'
import { infopage } from './schema/soknad/infopage'
import { dokumentkrav } from './schema/soknad/dokumentkrav'
import { dokumentkravSvar } from './schema/soknad/dokumentkrav-svar'
import { mineDagpengerAppText } from './schema/mine-dagpenger/mineDagpengerAppText'
import { mineDagpengerRichText } from './schema/mine-dagpenger/mineDagpengerRichText'
import { mineDagpengerLink } from './schema/mine-dagpenger/mineDagpengerLink'
import { mineDagpengerSetting } from './schema/mine-dagpenger/mineDagpengerSetting'
import { ProduktsidePreview } from './schema/produktside/produktside-preview/ProduktsidePreview'
import {
  produktsideCalculatorPage,
  produktsideCalculatorSettings,
  produktsideCalculatorText,
  produktsideContactOptions,
  produktsideFilterSection,
  produktsideGeneralText,
  produktsideHeader,
  produktsideKortFortalt,
  produktsideSection,
  produktsideSEO,
  produktsideSettings,
  produktsideTopContent,
} from './schema/produktside/schema'
import { rapporteringAppText } from './schema/rapportering/rapporteringAppText'
import { rapporteringRichText } from './schema/rapportering/rapporteringRichText'
import { saksbehandlingAppText } from './schema/saksbehandling/saksbehandlingAppText'
import { saksbehandlingInfoSide } from './schema/saksbehandling/saksbehandlingInfoSide'
import { rapporteringLink } from './schema/rapportering/rapporteringLink'
import { brevBlokk } from './schema/saksbehandling/brev-blokk'
import { brevMal } from './schema/saksbehandling/brev-mal'
import { ListItemBuilder, StructureBuilder, StructureResolverContext } from 'sanity/lib/structure'
import { behandlingOpplysning } from './schema/saksbehandling/behandling-opplysning'

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
            ]),
        ),

      S.listItem()
        .title('Mine dagpenger')
        .child(
          S.list()
            .title('Mine dagpenger')
            .items([
              createListItem(S, mineDagpengerAppText.name),
              createListItem(S, mineDagpengerRichText.name),
              createListItem(S, mineDagpengerLink.name),
              createListItem(S, mineDagpengerSetting.name),
            ]),
        ),

      S.listItem()
        .title('Rapportering')
        .child(
          S.list()
            .title('Rapportering')
            .items([
              createListItem(S, rapporteringAppText.name),
              createListItem(S, rapporteringRichText.name),
              createListItem(S, rapporteringLink.name),
            ]),
        ),

      S.listItem()
        .title('Saksbehandling')
        .child(
          S.list()
            .title('Saksbehandling')
            .items([
              createListItem(S, saksbehandlingAppText.name),
              createListItem(S, saksbehandlingInfoSide.name),
              createListItem(S, brevMal.name),
              createListItem(S, brevBlokk.name),
              createListItem(S, behandlingOpplysning.name),
            ]),
        ),

      S.listItem()
        .title('Produktside dagpenger')
        .child(
          S.list()
            .title('Produktside dagpenger')
            .items([
              createSingletonListItemProduktside(S, produktsideTopContent.name, 'Øverste innhold'),
              createSingletonListItemProduktside(S, produktsideHeader.name, 'Header'),
              createSingletonListItemProduktside(S, produktsideSettings.name, 'Venstremeny'),
              createSingletonListItemProduktside(S, produktsideKortFortalt.name, 'Kort fortalt'),
              createSingletonListItemProduktside(
                S,
                produktsideFilterSection.name,
                'Filter seksjon',
              ),
              createSingletonListItemProduktside(S, produktsideContactOptions.name, 'Kontakt oss'),
              createSingletonListItemProduktside(S, produktsideSEO.name, 'Søkemotoroptimalisering'),
              S.listItem()
                .title('Kalkulator')
                .child(
                  S.list()
                    .title('Kalkulator')
                    .items([
                      createSingletonListItemProduktside(
                        S,
                        produktsideCalculatorSettings.name,
                        'Kalkulator',
                      ),
                      createListItemProduktside(
                        S,
                        produktsideCalculatorText.name,
                        'Kalkulator tekst',
                      ),
                    ]),
                ),
              createListItemProduktside(S, produktsideCalculatorPage.name, 'Kalkulatorside'),
              createListItemProduktside(S, produktsideSection.name, 'Innholdsseksjoner'),
              createListItemProduktside(S, produktsideGeneralText.name, 'Generelle tekster'),
            ]),
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
        .filter(`_type == "${schemaName}" && language == $baseLanguage`)
        .params({ baseLanguage: `nb` }),
    )
}

function createListItemProduktside(
  S: StructureBuilder,
  schemaName: string,
  title?: string,
): ListItemBuilder {
  const capitalizedTitle = camelCaseToSentenceCase(schemaName)
  return S.listItem()
    .title(title ?? capitalizedTitle)
    .child(
      // Only show the base language variant of each item in schema
      S.documentList()
        .title(`${title ?? capitalizedTitle}`)
        .schemaType(schemaName)
        .filter(`_type == "${schemaName}" && language == $baseLanguage`)
        .params({ baseLanguage: `nb` })
        .child(
          S.editor()
            .schemaType(schemaName)
            .views([S.view.form(), S.view.component(ProduktsidePreview).title('Preview')]),
        ),
    )
}

/*
  This is a known caveat for singleton documents that uses document-interalization plugin
  READ MORE: https://github.com/sanity-io/document-internationalization/blob/main/docs/known-caveats.md
*/
function createSingletonListItemProduktside(
  S: StructureBuilder,
  schemaName: string,
  title?: string,
): ListItemBuilder {
  const capitalizedTitle = camelCaseToSentenceCase(schemaName)
  return S.listItem()
    .title(title ?? capitalizedTitle)
    .child(
      S.documentList()
        .title(title ?? capitalizedTitle)
        .id(schemaName)
        .schemaType(schemaName)
        .filter(`_id == "${schemaName}" && _type == "${schemaName}"`)
        .menuItems([
          {
            title: 'Create new singleton',
            intent: {
              type: 'create',
              params: {
                id: schemaName,
                type: schemaName,
              },
            },
          },
        ])
        .child(
          S.editor()
            .schemaType(schemaName)
            .views([S.view.form(), S.view.component(ProduktsidePreview).title('Preview')]),
        ),
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
