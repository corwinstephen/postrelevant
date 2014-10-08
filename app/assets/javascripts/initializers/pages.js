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
    }
  };
})(jQuery);