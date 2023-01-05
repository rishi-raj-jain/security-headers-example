import fs from 'fs'
import { join } from 'path'
import { load } from 'cheerio'
import { globbySync } from 'globby'
import { minify } from 'html-minifier'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'
import { minifyOptions } from './minifyOptions'

export default defineConfig({
  integrations: [
    tailwind(),
    {
      name: 'minify-html',
      hooks: {
        'astro:build:done': ({}) => {
          const htmlFiles = globbySync('dist/**/*.html')
          htmlFiles.forEach((i) => {
            const filePath = join(process.cwd(), i)
            const $ = load(fs.readFileSync(filePath, 'utf8').toString())
            const minifiedHTML = minify($.html(), minifyOptions)
            fs.writeFileSync(filePath, minifiedHTML, 'utf8')
          })
        },
      },
    },
  ],
})
