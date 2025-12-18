import { meldekortForside } from './saksbehandlerflate/sider/forside'

export const meldekortSingletonActions = new Set(['publish', 'restore', 'discardChanges'])

export const meldekortSingletonTypes: Set<string> = new Set([meldekortForside.name])
