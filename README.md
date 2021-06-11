# Awesome New Project
> The best project ever.

## Development Team

* **Lead Developer**  
Eric Guittiere - <rkgttr@gmail.com>

* **Contributors**

## Build Tools & Preprocessors

Scaffolded with [generator-rkgttr](https://www.npmjs.com/package/generator-rkgttr).

* **[SASS](http://sass-lang.com/guide)**  
An extension of CSS that adds power and elegance to the basic language. It allows to use variables, nested rules, mixins, inline imports, and more.

* **[Babel](https://babeljs.io/)**  
Babel is a JavaScript transpiler that allows you to use EcmaScript2015 today. Among other things.

* **[Rollup](http://rollupjs.org)**  
Rollup is a next-generation JavaScript module bundler. Author your app or library using ES2015 modules, then efficiently bundle them up into a single file for use in browsers and Node.js – even if you use advanced features like bindings and cycles.

* **[Gulp](http://gulpjs.com/)**  
Automates tasks such as minification, concatenation, compression, compilation, browser refreshing etc.

* **[Pug](https://pugjs.org/api/getting-started.html)**  
Pug is a terse language for writing HTML templates.

  * Produces HTML
  * Supports dynamic code
  * Supports reusability (DRY)

## Folder Structure

```
protofaq/  
├── build/
|   ├── css/
|   ├── img/
|   ├── fonts/
|   └── js/
|       └── vendor/
├── gulp/
|   └── tasks/
└── src/
|   ├── favicons/
|   ├── img/
|   ├── js/
|   |   └── modules/
|   ├── pug/
|   |   ├─── includes/
|   |   ├─── layouts/
|   |   └─── pages/
|   └── scss/
|      ├── base/
|      ├── layout/
|      ├── modules/
|      └── tools/
└── node_modules/
```

## Important Files

* `gulpfile.babel.js`  
Configuration of Gulp tasks.

* `package.json`  
Configuration of nodejs dependencies.

* `README.md`
This file, which contains documentation related to the project.

## JavaScript Libraries

Document any additional JS libraries here.

## Getting Started

```sh
yarn
```

Then:

```sh
gulp
```

For more documentation, refer to [generator-rkgttr](https://www.npmjs.com/package/generator-rkgttr).

## Important Notes
The content of `protofaq` root directory (except `node_modules`, and `build`) is to be kept under version control.

## Changelog


## License

MIT © Eric Guittiere
