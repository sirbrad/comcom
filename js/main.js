require.config({
  paths: {
    "jquery"    : "libs/jquery/dist/jquery",
    "tpl"       : "libs/requirejs-tpl/tpl",
    "config" : "config"
  }
})

require(['app'], function(app){
  app.init();
})
