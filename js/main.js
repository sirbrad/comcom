require.config({
  paths: {
    "jquery": "libs/jquery/dist/jquery"
  }
})

require(['app'], function(app){

  app.init()




//   var app = {
//     models: {},
//     views: {}
//   }

//   // MODELS
//  module.exports = function(variables){
//     var url = "https://api.github.com/repos/sirbrad/sirbrad.github.com/issues/3/comments"


//     var getComments = function(){
//       var xhr = $.ajax(url)
//         .done(function(data) {
//           window.hi = data
//     })
//     // .fail(function() {
//     //   alert( "error" );
//     // })
//     // .always(function() {
//     //   alert( "complete" );
//     // });

//     };
//     return {
//       getComments: getComments
//     }



//   }





//   // VIEWS
//  (function (views) {

//   views.comments = function(){


//     var comments = app.models.comments.getComments()

//   }

//   }(app.views));


// });




// var model = function(){


//   get = function(url,comment){
//     def = $.deferred()
//     def.reject({type: "empty"}) if comment.empty
//     $.ajax(url).done(function(data){
//       def.resolve(doSomethingWithData(data))
//     })
//     def.promise
//   },
//   doSomethingWithData = function(data){
//     return data
//   }
//   return {
//     get: get
//   }
// }


// view = function(){


//   retrieveData = function(){
//     model.get('foo')
//     .done(showData)
//     .fail(showError)
//   },
//   showData = function(){

//   },
//   showError = function(error) {
//     if error.type == empty doshizzle();

//   }

})
