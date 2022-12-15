import { defineConfig, definePlugin } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { withDocumentI18nPlugin } from '@sanity/document-internationalization'
import { schemaTypes } from './schema/schema'

const sharedConfig = {
  projectId: 'rt6o382n',

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
    default: true,
  },
  {
    ...sharedConfig,
    name: 'development',
    title: 'Dev',
    dataset: 'development',
    basePath: '/dev',
  },
])
