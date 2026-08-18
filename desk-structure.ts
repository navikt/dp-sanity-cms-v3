import React from 'react'
import { ListItemBuilder, StructureBuilder, StructureResolverContext } from 'sanity/structure'
import { rapporteringAppText } from './schema/meldekort/brukerflate/rapporteringAppText'
import { rapporteringLink } from './schema/meldekort/brukerflate/rapporteringLink'
import { rapporteringMessage } from './schema/meldekort/brukerflate/rapporteringMessage'
import { rapporteringRichText } from './schema/meldekort/brukerflate/rapporteringRichText'
import { meldekortLandingsside } from './schema/meldekort/landingsside/landingsside'
import { meldekortAktiviteter } from './schema/meldekort/saksbehandlerflate/fellesKomponenter/aktiviteter'
import { meldekortAktivitetsTabell } from './schema/meldekort/saksbehandlerflate/fellesKomponenter/aktivitetsTabell'
import { meldekortHeader } from './schema/meldekort/saksbehandlerflate/fellesKomponenter/header'
import { meldekortKalender } from './schema/meldekort/saksbehandlerflate/fellesKomponenter/kalender'
import { meldekortPersonlinje } from './schema/meldekort/saksbehandlerflate/fellesKomponenter/personlinje'
import { meldekortStatuser } from './schema/meldekort/saksbehandlerflate/fellesKomponenter/statuser'
import { meldekortVarsler } from './schema/meldekort/saksbehandlerflate/fellesKomponenter/varsler'
import { meldekortBekreftModal } from './schema/meldekort/saksbehandlerflate/modaler/bekreftModal'
import { meldekortHistorikkModal } from './schema/meldekort/saksbehandlerflate/modaler/historikkModal'
import { opprettMeldekortModal } from './schema/meldekort/saksbehandlerflate/modaler/opprettMeldekortModal'
import { meldekortForside } from './schema/meldekort/saksbehandlerflate/sider/forside'
import { meldekortFyllUt } from './schema/meldekort/saksbehandlerflate/sider/fyllUt'
import { meldekortHovedside } from './schema/meldekort/saksbehandlerflate/sider/hovedside'
import { meldekortKorriger } from './schema/meldekort/saksbehandlerflate/sider/korriger'
import { mineDagpengerAppText } from './schema/mine-dagpenger/mineDagpengerAppText'
import { mineDagpengerLink } from './schema/mine-dagpenger/mineDagpengerLink'
import { mineDagpengerRichText } from './schema/mine-dagpenger/mineDagpengerRichText'
import { mineDagpengerSetting } from './schema/mine-dagpenger/mineDagpengerSetting'
import { behandlingOpplysning } from './schema/saksbehandling/behandling-opplysning'
import { brevBlokk } from './schema/saksbehandling/brev-blokk'
import { brevMal } from './schema/saksbehandling/brev-mal'
import { regelmotorOpplysning } from './schema/saksbehandling/regelmotor-opplysning'
import { saksbehandlingAppText } from './schema/saksbehandling/saksbehandlingAppText'
import { saksbehandlingInfoSide } from './schema/saksbehandling/saksbehandlingInfoSide'

export function buildStructure(S: StructureBuilder, context: StructureResolverContext) {
  return S.list()
    .title('Applikasjoner')
    .items([
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
              createSingletonListItem(S, meldekortLandingsside.name, 'Landingsside'),
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
                      S.divider().title('Sider'),
                      createSingletonListItem(S, meldekortForside.name, 'Forside (Demo)'),
                      createSingletonListItem(S, meldekortHovedside.name, 'Hovedside'),
                      createSingletonListItem(S, meldekortFyllUt.name, 'Fyll ut meldekort'),
                      createSingletonListItem(S, meldekortKorriger.name, 'Korriger meldekort'),
                      S.divider().title('Modaler'),
                      createSingletonListItem(S, meldekortBekreftModal.name, 'Bekreft-modal'),
                      createSingletonListItem(S, meldekortHistorikkModal.name, 'Historikk-modal'),
                      createSingletonListItem(
                        S,
                        opprettMeldekortModal.name,
                        'Opprett meldekort-modal',
                      ),
                      S.divider().title('Felles komponenter'),
                      createSingletonListItem(S, meldekortHeader.name, 'Header'),
                      createSingletonListItem(S, meldekortPersonlinje.name, 'Personlinje'),
                      createSingletonListItem(S, meldekortAktiviteter.name, 'Aktiviteter'),
                      createSingletonListItem(S, meldekortStatuser.name, 'Statuser'),
                      createSingletonListItem(
                        S,
                        meldekortAktivitetsTabell.name,
                        'Aktivitetstabell',
                      ),
                      createSingletonListItem(S, meldekortKalender.name, 'Kalender'),
                      createSingletonListItem(S, meldekortVarsler.name, 'Varsler og feilmeldinger'),
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
              S.listItem()
                .title(camelCaseToSentenceCase(regelmotorOpplysning.name))
                .child(S.documentTypeList(regelmotorOpplysning.name)),
            ]),
        ),
    ])
}

function createListItem(S: StructureBuilder, schemaName: string, title?: string): ListItemBuilder {
  const capitalizedTitle = camelCaseToSentenceCase(schemaName)
  return S.listItem()
    .title(title ?? capitalizedTitle)
    .child(
      S.documentList()
        .apiVersion('v2022-03-07')
        .title(`${title ?? capitalizedTitle}`)
        .schemaType(schemaName)
        .filter(`_type == "${schemaName}" && language == $baseLanguage`)
        .params({ baseLanguage: `nb` }),
    )
}

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

function camelCaseToSentenceCase(camelCaseString: string) {
  let sentenceCaseString = camelCaseString.replace(/([A-Z])/g, ' $1')

  sentenceCaseString.toLowerCase()

  sentenceCaseString = sentenceCaseString.replace(/^./, function (str) {
    return str.toUpperCase()
  })

  return sentenceCaseString
}
