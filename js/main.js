require.config({
  paths: {
    "jquery": "libs/jquery/dist/jquery",
    "marked": "libs/marked/lib/marked"
  }
})

require(['app'], function(app){
  app.init()
})
