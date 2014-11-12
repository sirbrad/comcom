define(['jquery', 'tpl!../templates/comment-item.tpl'], function($, commentHtml){

  var init = function(){
    bindEvents();
  }

  var bindEvents = function(){
    $(window).on('comments-in', render);
  };

  var render = function(ev, params){
    var data = params.data;
    $(data).each(function(i){
      _html = commentHtml({
        content: data[i].body_html,
        date: data[i].created_at,
        author: data[i].user.login,
        avatar_url: data[i].user.avatar_url,
        profile_url: data[i].user.html_url
      });
      // $('.site-body').append(data[i].body_html)
      $('.comment-list').append(_html)
    })
  };

  init();

});
