define(['models/comment', 'marked'], function(model, marked){


  var init = function(){
    var _comments = model.get();
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: true
    });

    bindEvents();
  }

  var bindEvents = function(){
    $(window).on('comments-in', render);
  };

  var render = function(ev, params){
    var data = params.data;
    $(data).each(function(i){
      $('body').append(marked(data[i].body))
    })
  };

  return {
    init: init
  }

});
