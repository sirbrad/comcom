/*
 * http://requirejs.org/docs/optimization.html
 *
 * Use NodeJs to execute the r.js optimization script on this build script
 * node r.js -o app.build.js
 *
 * See: https://github.com/jrburke/r.js/blob/master/build/example.build.js for an example build script
 *
 * If you specify just the name (with no includes/excludes) then all modules are combined into the "main" file.
 * You can include/exclude specific modules though if needed (this helps with 'lazy loading' scripts)
 *
 * You can also set optimize: "none" (or more specific uglifyjs settings) if you need to.
 *
 * Node: if you set relative paths then do them relative to the baseUrl
 */
({	
    appDir: '../../',
    baseUrl: 'scripts',
    dir: '../../build',
    /*
     * The below 'paths' object is useful for when using plugins/named module paths.
     * If you use plugins or named modules in your code then don't forget to specify the same paths again in your build script.
     * Otherwise your build script wont be able to find your plugins/named modules and will generate an error when building.
     */
    paths: {
        jquery: 'utils/jquery',
        tpl: 'plugins/tpl'
    },
    optimize: 'none',
    modules: [
        {
            name: 'app/main'
            /*
            include: ['module'],
            exclude: ['module']
            */
        }
    ]
})