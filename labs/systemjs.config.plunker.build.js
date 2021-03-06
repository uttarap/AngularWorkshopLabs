/**
 * PLUNKER CURRENT BUILD VERSION
 * (based on systemjs.config.js in angular.io)
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  
  var ngVersion = '@2.4.9',
      ngRouterVersion = '@3.4.9';
  System.config({
    // DEMO ONLY! REAL CODE SHOULD NOT TRANSPILE IN THE BROWSER
    transpiler: 'ts',
    typescriptOptions: {
      tsconfig: true
    },
    meta: {
      'typescript': {
        "exports": "ts"
      }
    },
    paths: {
      // paths serve as alias
      'npm:': 'https://unpkg.com/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core' + ngVersion + '/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common' + ngVersion + '/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler' + ngVersion + '/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser' + ngVersion + '/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic' + ngVersion + '/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http' + ngVersion + '/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router' + ngRouterVersion + '/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms' + ngVersion + '/bundles/forms.umd.js',

      // other libraries
      'rxjs':                       'npm:rxjs',
      'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
      'ts':                         'npm:plugin-typescript@5.1.2/lib/plugin.js',
      'typescript':                 'npm:typescript@2.0.6/lib/typescript.js',

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.ts',
        defaultExtension: 'ts'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'angular2-in-memory-web-api': {
        main: './index.js',
        defaultExtension: 'js'
      }
    }
  });
})(this);