var window.app = window.app || {};
// var window.app.models.comments = {}

var app = (function(){
  var url = "https://api.github.com/repos/sirbrad/sirbrad.github.com/issues/3/comments"

  var getComments = function(){
    var xhr = $.get(url, function(data, status, req){
      console.log(req.getResponseHeader('link'));
    })
  };

  return {
    getComments: getComments
  }

})();

