define(
  ['jquery', 'moment', '../models/comment', 'tpl!../templates/comment-item.tpl'],
  function($, moment, model, tpl){

  function init(){
    bindEvents();
  }

  function bindEvents(){
    $(window).on('comments-fetched', updateView);
  };

  function dateFormats(date) {
     return {
      from_now: moment(date).fromNow(),
      formatted: moment(date).format('MMMM Do, YYYY'),
      numeric: moment(date).format('YYYY-DD-MM')
    }
  };

  function updateView(ev, params){
    var data = params.data;

    $(data).each(function(i){
      var _html = tpl({
        content: data[i].body_html,
        date: dateFormats(new Date(data[i].created_at)),
        author: data[i].user.login,
        avatar_url: data[i].user.avatar_url,
        profile_url: data[i].user.html_url
      });

      $('.comment-list').append(_html)
    })
    // fetch more data. If data isn't there then
    // the comments-fetched window event won't fire
    // so we good.
    model.fetch();

    // $(window).trigger('view-updated');
    // Then in the model, listen to this to then fetch again
  };

  init();

});
