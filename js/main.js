require.config({
  paths: {
    "jquery": "libs/jquery/dist/jquery"
  }
})

require(['app'], function(app){
  app.init({
    username: "sirbrad"
  })
})
