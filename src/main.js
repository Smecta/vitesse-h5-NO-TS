import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import { trackRouter } from 'vue-gtag-next'
import App from './App.vue'
import generatedRoutes from '~pages'

// import '@unocss/reset/tailwind.css'
import './styles/main.css'
import './styles/css-vars.scss'
import './styles/index.scss'
import 'uno.css'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob('./modules/*.js', { eager: true }))
      .forEach(i => i.install?.(ctx))

    // track pageview
    trackRouter(ctx.router)
  },
)
