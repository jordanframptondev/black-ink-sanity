import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'yl9xajmz',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: true,
  /**
   * The name of the studio host.
   * Learn more at https://www.sanity.io/docs/cli#studio-host
   * Studio deployed to https://black-ink.sanity.studio/
   */
  studioHost: 'black-ink'
})
