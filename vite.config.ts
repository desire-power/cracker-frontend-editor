import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  server: {
    port: 3000,
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    minify: false,
    lib: {
      entry: 'src/index.ts',
      name: 'cracker-frontend-editor',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'classnames',
        'react/jsx-runtime',
        '@editorjs/editorjs',
        '@editorjs/header',
        '@editorjs/link',
        '@editorjs/nested-list',
        '@editorjs/paragraph',
        'editorjs-embed',
        'editorjs-image',
        'editorjs-quote',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          classnames: 'classnames',
          '@editorjs/editorjs': 'EditorJs',
          '@editorjs/header': 'Header',
          '@editorjs/link': 'LinkTool',
          '@editorjs/nested-list': 'List',
          '@editorjs/paragraph': 'Paragraph',
          'editorjs-embed': 'Embed',
          'editorjs-image': 'ImageTool',
          'editorjs-quote': 'Quote',
        },
      },
    },
  },
})
