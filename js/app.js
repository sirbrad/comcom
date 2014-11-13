define(['models/comment', 'views/comments-list'], function(commentModel){

  var init = function(){
    commentModel.get(this.config);
  };

  return {
    init: init,
    config: config
  }

});
