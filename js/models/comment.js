define(['jquery', 'config'], function($, config){

  var ajaxOptions = {
    url: url(),
    headers: { 'Accept': 'application/vnd.github.v3.html+json' }
  };

  function url(){
    var _url = "https://api.github.com/repos/";
    _url += config.username + "/";
    _url += config.repo;
    _url += "/issues/" + config.issue_id + "/comments?per_page=100";
    return _url
  };

  function fetch(){
    $.ajax(ajaxOptions)
      .done(success)
  };

  function success(data, status, xhr) {
    $(window).trigger('comments-fetched', { data: data });
  };

  return {
    fetch: fetch
  };
});
