/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import viteImagemin from 'vite-plugin-imagemin'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

/*  
    Normalmente las variables y mixins de SASS tendrían que
    importarse mjanualmente en cada archivo *.sass o *.scss
    Vite puede injectar los archivos globalmente por nosotros
 */
const sassVariables = fs.readFileSync('src/styles/sass/_variables.scss', 'utf8')
const sassMixins = fs.readFileSync('src/styles/sass/_mixins.scss', 'utf8')

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [
    react(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        maxMemory: 500
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      }
    })
  ],
  build: {
    target: "esnext",
    polyfillModulePreload: true
  },
  experimental: {
    renderBuiltUrl(filename: string, { hostType }: { hostType: 'js' | 'css' | 'html' }) {
      return { relative: true }
    }
  },
  base: './',
  publicDir: "./public",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@sass': path.resolve(__dirname, './src/styles/sass'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@images': path.resolve(__dirname, './src/assets/img'),
      '@components': path.resolve(__dirname, './src/components'),
      '@reducers': path.resolve(__dirname, './src/reducers'),
      '@routers': path.resolve(__dirname, './src/routers'),
      '@store': path.resolve(__dirname, './src/store'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
    conditions: ['development', 'browser'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: sassVariables + sassMixins
      },
      sass: {
        additionalData: sassVariables + sassMixins
      }
    }
  },
  server: {
    port: 3000
  }
})

export default config