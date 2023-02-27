import { produktsideFilterSection } from './produktsideFilterSection'
import { produktsideSettings } from './produktsideSettings'
import { produktsideContactOptions } from './produtktsideContactOptions'
import { produktsideKortFortalt } from './schema'

// TODO: Finn ut hvorfor man ikke får opp ønskede SingletonActions ved bruk av denne
export const produktsideSingletonActions = new Set(['publish', 'restore', 'discardChanges'])

export const produktsideSingletonTypes: Set<string> = new Set([
  produktsideSettings.name,
  produktsideKortFortalt.name,
  produktsideFilterSection.name,
  produktsideContactOptions.name,
])
