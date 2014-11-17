define(['models/comment', 'views/comments-list'], function(commentModel){

  function init(){
    commentModel.fetch();
  }

  return {
    init: init
  };

});
