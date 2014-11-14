define(['jquery', 'tpl!../templates/comment-item.tpl'],
  function($, tpl){

  function init(){
    bindEvents();
  }

  function bindEvents(){
    $(window).on('comments-fetched', updateView);
  };

  function updateView(ev, params){
    var data = params.data;

    $(data).each(function(i){
      var _html = tpl({
        content: data[i].body_html,
        date: data[i].created_at,
        author: data[i].user.login,
        avatar_url: data[i].user.avatar_url,
        profile_url: data[i].user.html_url
      });

      $('.comment-list').append(_html)
    })
  };

  init();

});
