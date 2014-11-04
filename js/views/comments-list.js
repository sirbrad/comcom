define(['jquery'], function($){

  var init = function(){
    bindEvents();
  }

  var bindEvents = function(){
    $(window).on('comments-in', render);
  };

  var render = function(ev, params){
    var data = params.data;
    $(data).each(function(i){
      $('.site-body').append(data[i].body_html)
    })
  };

  init();

  return {}

});
