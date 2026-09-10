import {
  CreateAuthStoreOptions,
  createAuthStore,
  defineConfig,
  defineField,
  SingleWorkspace,
} from 'sanity'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schema/schema'
import { buildStructure } from './desk-structure'
import { structureTool } from 'sanity/structure'
import { documentInternationalization } from '@sanity/document-internationalization'
import { internationalizedArray } from 'sanity-plugin-internationalized-array'
import { produktsideSingletonTypes } from './schema/produktside/produktsideConfig'
import { meldekortSingletonTypes } from './schema/meldekort/meldekortSingletons'

function getAuthConfig(): CreateAuthStoreOptions {
  return {
    dataset: 'production',
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

const sharedConfig: Pick<SingleWorkspace, 'projectId' | 'plugins' | 'schema' | 'auth'> = {
  projectId: 'rt6o382n',
  auth: createAuthStore(getAuthConfig()),
  plugins: [
    structureTool({ structure: buildStructure }),
    visionTool(),
    documentInternationalization({
      supportedLanguages: [
        { title: 'Engelsk', id: 'en' },
        { title: 'Bokmål', id: 'nb' },
      ],
      schemaTypes: schemaTypes.map((schema) => schema.name),
    }),
    internationalizedArray({
      languages: [
        { id: 'nb', title: 'Bokmål' },
        { id: 'en', title: 'Engelsk' },
      ],
      defaultLanguages: ['nb', 'en'],
      fieldTypes: [
        'string',
        'text',
        defineField({
          name: 'blockContent',
          title: 'Innhold',
          type: 'array',
          of: [
            {
              type: 'block',
              styles: [{ title: 'Normal', value: 'normal' }],
              lists: [],
            },
          ],
        }),
      ],
    }),
  ],

  schema: {
    types: schemaTypes,

    templates: (templates) =>
      templates
        .filter(
          ({ schemaType }) =>
            !produktsideSingletonTypes.has(schemaType) && !meldekortSingletonTypes.has(schemaType),
        )
        // This will remove all the language templates and only keep the base template when creating a new document.
        .filter((template) => schemaTypes.map((schema) => schema.name).includes(template.id)),
  },
}

export default defineConfig([
  {
    ...sharedConfig,
    name: 'production',
    title: 'Produksjon',
    dataset: 'production',
    basePath: '/sanity/prod',
    default: true,
  },
  {
    ...sharedConfig,
    name: 'development',
    title: 'Dev',
    dataset: 'development',
    basePath: '/sanity/dev',
  },
])
