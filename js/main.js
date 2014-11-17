require.config({
  paths: {
    "jquery" : "libs/jquery/dist/jquery",
    "tpl"    : "libs/requirejs-tpl/tpl",
    'moment' : "libs/moment/moment"
  }
});

require(['app'], function(app){
  app.init();
});
