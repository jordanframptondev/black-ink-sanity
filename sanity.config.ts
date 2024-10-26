import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

const {theme} = (await import(
  // @ts-expect-error -- TODO setup themer.d.ts to get correct typings
  'https://themer.sanity.build/api/hues?primary=534f3d;500'
)) as {theme: import('sanity').StudioTheme}

export default defineConfig({
  name: 'default',
  title: 'Black Ink',

  projectId: 'yl9xajmz',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  theme,

  schema: {
    types: schemaTypes,
  },

  studio: {
    components: {

    }
  }
})
