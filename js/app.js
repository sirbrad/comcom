define(['models/comment', 'views/comments-list'], function(commentModel){

  var init = function(){
    commentModel.get();
  };

  return {
    init: init
  }

});
