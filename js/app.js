define(['models/comment', 'views/comments-list'], function(commentModel){

  var init = function(){
    commentModel.get(this.config);
  };

  var config = {
    username: "sirbrad"
  };

  return {
    init: init,
    config: config
  }

});
