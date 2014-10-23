define(['jquery'], function($){

  var url = "https://api.github.com/repos/sirbrad/sirbrad.github.com/issues/3/comments";

  var get = function(){
    var xhr = $.ajax(url)

      .done(function(data) {
        $(window).trigger('comments-in', { data: data });
      })
  }

  return {
      get: get
  };
});
