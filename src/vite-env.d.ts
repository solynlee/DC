/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// src/shims-vue.d.ts
declare module '*.m4v' {
  const src: string
  export default src
}