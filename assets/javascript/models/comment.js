var app = (function(){
  var url = "https://api.github.com/repos/sirbrad/sirbrad.github.com/issues/3/comments"

  var getComments = function(){
    var xhr = $.ajax(url)
      .done(function(data) {
        window.hi = data
  })
  // .fail(function() {
  //   alert( "error" );
  // })
  // .always(function() {
  //   alert( "complete" );
  // });

  };

  return {
    getComments: getComments
  }

})();
