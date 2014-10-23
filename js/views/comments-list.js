define(['models/comment'], function(model){

  var init = function(){
    var _comments = model.get();

    bindEvents();
  }

  var bindEvents = function(){
    $(window).on('comments-in', render);
  };

  var render = function(ev, params){
    var data = params.data;
    $(data).each(function(i){
      $('body').append("<p>" + data[i].body + "</p>")
    })
  };

  return {
    init: init
  }

});
