import { resolve } from 'node:path'
import { existsSync, readFileSync } from 'node:fs'
import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'inject-css-module',
    configKey: 'injectCss',
  },
  defaults: {
    cssPath: 'assets/css/style.css', // Default path to the CSS file
  },
  setup(options, nuxt) {
    // Use the `modules:done` hook to ensure this runs last
    nuxt.hook('modules:done', () => {
      // Resolve the absolute path to the CSS file
      const cssFilePath = resolve(nuxt.options.rootDir, options.cssPath)
      const innerHTML = existsSync(cssFilePath) ? readFileSync(cssFilePath, 'utf-8') : ''

      nuxt.options.app.head.style = nuxt.options.app.head.style || []
      nuxt.options.app.head.style.push({
        id: 'global-style',
        innerHTML,
        tagPosition: 'bodyClose', // Ensure it's added at the end of the head
      })
    })
  },
})
