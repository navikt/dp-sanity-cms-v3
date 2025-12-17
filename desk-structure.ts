// note: context includes `currentUser` and the client

import React from 'react'
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
import { rapporteringAppText } from './schema/meldekort/brukerflate/rapporteringAppText'
import { rapporteringRichText } from './schema/meldekort/brukerflate/rapporteringRichText'
import { saksbehandlingAppText } from './schema/saksbehandling/saksbehandlingAppText'
import { saksbehandlingInfoSide } from './schema/saksbehandling/saksbehandlingInfoSide'
import { rapporteringLink } from './schema/meldekort/brukerflate/rapporteringLink'
import { brevBlokk } from './schema/saksbehandling/brev-blokk'
import { brevMal } from './schema/saksbehandling/brev-mal'
import { ListItemBuilder, StructureBuilder, StructureResolverContext } from 'sanity/lib/structure'
import { behandlingOpplysning } from './schema/saksbehandling/behandling-opplysning'
import { rapporteringMessage } from './schema/meldekort/brukerflate/rapporteringMessage'
import { brukerdialogInfoside } from './schema/brukerdialog/infopage'
import { meldekortForside } from './schema/meldekort/saksbehandlerflate/sider/forside'

export function buildStructure(S: StructureBuilder, context: StructureResolverContext) {
  return S.list()
    .title('Applikasjoner')
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
        .title('Brukerdialog')
        .child(
          S.list()
            .title('Innhold')
            .items([createListItem(S, brukerdialogInfoside.name)]),
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
        .title('Meldekort')
        .child(
          S.list()
            .title('Meldekort')
            .items([
              S.listItem()
                .title('Brukerflate')
                .child(
                  S.list()
                    .title('Brukerflate')
                    .items([
                      createListItem(S, rapporteringAppText.name),
                      createListItem(S, rapporteringRichText.name),
                      createListItem(S, rapporteringLink.name),
                      createListItem(S, rapporteringMessage.name),
                    ]),
                ),
              S.listItem()
                .title('Saksbehandlerflate')
                .child(
                  S.list()
                    .title('Saksbehandlerflate')
                    .items([
                      S.listItem().title('Sider').child(S.list().title('Sider').items([createSingletonListItem(S, meldekortForside.name, 'Forside')])),
                      S.listItem().title('Modaler').child(S.list().title('Modaler').items([])),
                      S.listItem()
                        .title('Felles komponenter')
                        .child(S.list().title('Felles komponenter').items([])),
                    ]),
                ),
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
        .apiVersion('v2022-03-07')
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
        .apiVersion('v2022-03-07')
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
function createSingletonListItem(
  S: StructureBuilder,
  schemaName: string,
  title?: string,
  previewComponent?: React.ComponentType,
): ListItemBuilder {
  const capitalizedTitle = camelCaseToSentenceCase(schemaName)
  const views = previewComponent
    ? [S.view.form(), S.view.component(previewComponent).title('Preview')]
    : [S.view.form()]

  return S.listItem()
    .title(title ?? capitalizedTitle)
    .schemaType(schemaName)
    .child(S.document().schemaType(schemaName).documentId(schemaName).views(views))
}

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
        .apiVersion('v2022-03-07')
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
