define(['jquery'], function($){

  var ajaxOptions = {
    url: "https://api.github.com/repos/sirbrad/sirbrad.github.com/issues/3/comments",
    headers: { 'Accept': 'application/vnd.github.v3.html+json' }
  };

  var get = function(){
    console.log(window.config);
    $.ajax(ajaxOptions)
      .done(success)
  };

  var success = function(data) {
    console.log(data)
    $(window).trigger('comments-in', { data: data });
  };

  return {
    get: get
  };
});
