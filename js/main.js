require.config({
  paths: {
    "jquery": "libs/jquery/dist/jquery"
  }
})

require(['app', 'config'], function(app){
  app.init();
})
