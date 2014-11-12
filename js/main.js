require.config({
  paths: {
    "jquery": "libs/jquery/dist/jquery",
    "tpl"   : "libs/requirejs-tpl/tpl"
  }
})

require(['app', 'config'], function(app){
  app.init();
})
