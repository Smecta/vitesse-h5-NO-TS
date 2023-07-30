import VueGtag from 'vue-gtag-next'
import config from '~/config'

export const install = ({ app }) => {
  app.use(VueGtag, {
    property: { id: config.gtag.id },
  })
}
