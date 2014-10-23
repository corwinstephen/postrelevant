(function($){
  App.Modules.Nav = {
    scrollBackground: function(){
      var backgroundPosition = $("body").css("background-position-y");
      var changed = false;
      var $body = $("body");
      var $doc = $(document);
      var updateBackground = function(){
        if(changed)
          $body.css("background-position", "0 " + backgroundPosition + "px");
          changed = false;
      };
      var interval = setInterval(updateBackground, 40);

      var updatePosition = function(){
        backgroundPosition = $doc.scrollTop() / -6;
        changed = true;
      };

      updatePosition();
      $doc.scroll(updatePosition);
    },

    animateBrackets: function(firstElement){
      var config = {
        bracketPadding: 15
      };
      
      var $brackets = $(".nav-rightbuttons-brackets");

      var moveBracketsToElement = function(el, animate){
        var $el = $(el);
        $currentElement = $el;
        var hoverElementWidth = $el.width();
        var offsetLeft = $el.position().left;
        if(_.isUndefined(animate)){ animate = true; }
        if(!animate){
          $brackets.css({
            "width": hoverElementWidth + (config.bracketPadding * 2), 
            "left": offsetLeft - config.bracketPadding
          });
        } else {
          $brackets.animate({
            "width": hoverElementWidth + (config.bracketPadding * 2), 
            "left": offsetLeft - config.bracketPadding
          }, 250, "easeOutBack");
        }
      };

      if(!firstElement){ 
        firstElement = $(".nav-rightbuttons ul li").first();
      }

      setTimeout(function(){
        moveBracketsToElement(firstElement, false);
      }, 100);

      $(".nav-rightbuttons ul li").on("mouseover", function(e){
        moveBracketsToElement(e.currentTarget);
      });
    }
  };
})($);