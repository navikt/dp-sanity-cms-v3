import { AuthStoreOptions, createAuthStore, defineConfig, SingleWorkspace } from 'sanity'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schema/schema'
import { buildStructure } from './desk-structure'
import { structureTool } from 'sanity/structure'
import { documentInternationalization } from '@sanity/document-internationalization'
import { produktsideSingletonTypes } from './schema/produktside/produktsideConfig'

function getAuthConfig(dataset: 'development' | 'production' | 'migrering-test'): AuthStoreOptions {
  return {
    dataset,
    projectId: 'rt6o382n',
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
  plugins: [
    structureTool({ structure: buildStructure }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { title: 'Engelsk', id: 'en' },
        { title: 'Bokmål', id: 'nb' },
        { title: 'Nynorsk', id: 'nn' },
      ],
      schemaTypes: schemaTypes.map((schema) => schema.name),
    }),
  ],

  schema: {
    types: schemaTypes,

    templates: (templates) =>
      templates
        .filter(({ schemaType }) => !produktsideSingletonTypes.has(schemaType))
        // This will remove all the language templates and only keep the base template when creating a new document.
        .filter((template) => schemaTypes.map((schema) => schema.name).includes(template.id)),
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
  {
    ...sharedConfig,
    auth: createAuthStore(getAuthConfig('migrering-test')),
    name: 'migrering-test',
    title: 'Migering TEST',
    dataset: 'migrering-test',
    basePath: '/sanity/migrering',
  },
])
