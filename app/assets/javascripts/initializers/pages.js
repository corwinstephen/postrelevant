(function($){
  App.Initializers.Pages = {
    index: function(){
      // // Background movement
      // var originalX = $("body").css("background-position-x");
      // var xAsInt = parseInt(originalX.substr(0, originalX.length - 1));
      // var originalY = $("body").css("background-position-y");
      // var yAsInt = parseInt(originalY.substr(0, originalY.length - 1));

      // $(document).mousemove(function(e){
      //   var amountMovedX = (e.pageX * -1 / 10);
      //   var amountMovedY = (e.pageY * -1 / 10);

      //   var newPosX = (xAsInt + amountMovedX) + "px";
      //   var newPosY = (yAsInt + amountMovedY) + "px";

      //   $("body").css({
      //     "background-position": newPosX + " " + newPosY
      //   });
      // });

      // // Select the default text box
      // $("#workingon").select();


      this._animateBrackets();
    },

    _animateBrackets: function(){
      var config = {
        bracketPadding: 15
      };
      var brackets = $(".nav-rightbuttons-brackets");

      var moveBracketsToElement = function(){
        var $this = $(this);
        var hoverElementWidth = $this.width();
        var offsetLeft = $this.position().left;
        brackets.animate({
          "width": hoverElementWidth + (config.bracketPadding * 2), 
          "left": offsetLeft - config.bracketPadding
        }, 250, "easeOutBack");
      };
      
      var firstElement = $(".nav-rightbuttons ul li").first();
      moveBracketsToElement.bind(firstElement)();

      $(".nav-rightbuttons ul li").on("mouseover", moveBracketsToElement);
    }
  };
})(jQuery);