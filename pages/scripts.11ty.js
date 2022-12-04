const esbuild = require('esbuild')
const { NODE_ENV = 'production' } = process.env
const isProduction = NODE_ENV === 'production'

module.exports = class {
  data() {
    return {
      permalink: false,
      eleventyExcludeFromCollections: true
    }
  }
 
  async render() {
    await esbuild.build({
      entryPoints: ['src/main.js', "src/bookshelf.js"],
      bundle: true,
      minify: isProduction,
      outdir: '_site/assets/js',
      sourcemap: !isProduction,
      format: 'esm',
      target: ['es2022'],
    })
  }
}
