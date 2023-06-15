import { produktsideFilterSection } from './produktsideFilterSection'
import { produktsideSettings } from './produktsideSettings'
import { produktsideContactOptions } from './produtktsideContactOptions'
import { produktsideKortFortalt } from './produktsideKortFortalt'
import { produktsideSEO } from './produktsideSEO'
import { produktsideTopContent } from './produktsideTopContent'
import { produktsideCalculatorSettings } from './schema'

/* TODO: Finn ut hvorfor man ikke får opp ønskede SingletonActions ved bruk av denne.
Tror det er fordi vi bruker internalization plugin sine actions som er forskjellig fra Sanity default. */
export const produktsideSingletonActions = new Set(['publish', 'restore', 'discardChanges'])

export const produktsideSingletonTypes: Set<string> = new Set([
  produktsideSettings.name,
  produktsideKortFortalt.name,
  produktsideFilterSection.name,
  produktsideContactOptions.name,
  produktsideSEO.name,
  produktsideCalculatorSettings.name,
  produktsideTopContent.name,
])
