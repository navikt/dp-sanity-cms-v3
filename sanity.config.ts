import { AuthStoreOptions, createAuthStore, defineConfig, SingleWorkspace } from 'sanity'
import { visionTool } from '@sanity/vision'
import { withDocumentI18nPlugin } from '@sanity/document-internationalization'
import { schemaTypes } from './schema/schema'
import { buildStructure } from './desk-structure'
import { produktsideSingletonTypes } from './schema/produktside/produktsideConfig'
import { structureTool } from 'sanity/structure'

function getAuthConfig(dataset: 'development' | 'production'): AuthStoreOptions {
  return {
    dataset,
    projectId: 'rt6o382n',
    mode: 'replace',
    redirectOnSingle: true,
    providers: [
      {
        name: 'saml',
        title: 'NAV SSO',
        url: 'https://api.sanity.io/v2021-10-01/auth/saml/login/f3270b37',
      },
    ],
  }
}

const sharedConfig: Pick<SingleWorkspace, 'projectId' | 'plugins' | 'schema'> = {
  projectId: 'rt6o382n',
  plugins: withDocumentI18nPlugin([structureTool({ structure: buildStructure }), visionTool()], {
    base: 'nb',
    languages: [
      {
        title: 'Bokmål',
        id: 'nb',
      },
      {
        title: 'Nynorsk',
        id: 'nn',
      },
      {
        title: 'Engelsk',
        id: 'en',
      },
    ],
  }),

  schema: {
    types: schemaTypes,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !produktsideSingletonTypes.has(schemaType)),
  },
}

export default defineConfig([
  {
    ...sharedConfig,
    auth: createAuthStore(getAuthConfig('production')),
    name: 'production',
    title: 'Produksjon',
    dataset: 'production',
    basePath: '/sanity/prod',
    default: true,
  },
  {
    ...sharedConfig,
    auth: createAuthStore(getAuthConfig('development')),
    name: 'development',
    title: 'Dev',
    dataset: 'development',
    basePath: '/sanity/dev',
  },
])
