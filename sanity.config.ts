import { AuthStoreOptions, createAuthStore, defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { withDocumentI18nPlugin } from '@sanity/document-internationalization'
import { schemaTypes } from './schema/schema'

const authConfig: AuthStoreOptions = {
  dataset: 'production',
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

const sharedConfig = {
  projectId: 'rt6o382n',
  auth: createAuthStore(authConfig),
  plugins: withDocumentI18nPlugin([deskTool(), visionTool()], {
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
  },
}

export default defineConfig([
  {
    ...sharedConfig,
    name: 'production',
    title: 'Produksjon',
    dataset: 'production',
    basePath: '/prod',
    // default: true,
  },
  {
    ...sharedConfig,
    name: 'development',
    title: 'Dev',
    dataset: 'development',
    basePath: '/dev',
  },
])
