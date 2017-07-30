# Vue Starter

> A full-featured Vue.js starter project.

## NPM Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm start # OR npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Features

This currently offers the following, out of the box:

- [x] The versatile and performant [Vue.js](https://vuejs.org) framework.
- [x] JS bundling and hot reloading with [Webpack](https://webpack.github.io/).
- [x] Next generation JS compilation with [Babel](babeljs.io).
- [x] Flexible task runner / build tool with [NPM scripts](https://docs.npmjs.com/misc/scripts).
- [x] **Linting** with:
	- [x] [ESLint](http://eslint.org/).
	- [x] [stylelint](https://stylelint.io/).
	- [x] ~~[HTMLTidy](http://www.html-tidy.org/)~~ [htmllint-loader](https://github.com/TheBlackBolt/htmllint-loader).
- [x] Source maps.

_More to come._

### Planned Features

- [ ] CSS pre-compilation with [SASS](http://sass-lang.com/).
- [ ] Production ready build with [CSS](https://github.com/css/csso)[^1], [JS](https://github.com/mishoo/UglifyJS2), and [HTML](https://github.com/kangax/html-minifier) minification.
- [ ] Reporting on bundle / asset size analytics.
- [ ] [Pre-rendering for SEO benefits](http://vuejs-templates.github.io/webpack/prerender.html).
- [ ] Code splitting with [Webpack](https://webpack.github.io/).
- [ ] Local and mobile browser testing, including live reload, with [BrowserSync](browsersync.io/).
- [ ] Create a webpack loader for [HTMLTidy](http://www.html-tidy.org/).
- [ ] Full featured code tests (headless Chrome?), including:
	- [ ] Unit testing.
	- [ ] End to end testing.
	- [ ] Visual regression testing.

### Features Under Consideration

- [ ] [PostCSS](http://postcss.org/) post-processing with cool features such as:
	- [ ] Lint CSS for browser support against caniuse database with [doiuse](https://github.com/anandthakker/doiuse).
	- [ ] Ensure consistent colors with [css-colorguard](https://github.com/SlexAxton/css-colorguard).
	- [ ] What else?? Needs research...
- [ ] Static assets with version hashes.

## References

- [Webpack template docs](http://vuejs-templates.github.io/webpack/).
- [vue-loader docs](http://vuejs.github.io/vue-loader).

## Credits

Thank you to the following individuals/projects/repos for your influence in creating this project:

- [VueJS templates](https://github.com/vuejs-templates/webpack): for great examples.
- [villeristi](https://github.com/villeristi/vue.js-starter-template): for a killer starter template.
- [BrowserSync](https://github.com/BrowserSync/recipes/blob/master/recipes/webpack.babel/app.js): for their recipes (albeit outdated).
<!-- - [myxingke](https://github.com/myxingke/webpack-browser-sync-vue-demo): for one of the only examples I found that allowed webpack and browser-sync to play nice together. -->

[^1]: [CSS minification benchmarks](https://goalsmashers.github.io/css-minification-benchmark/)
