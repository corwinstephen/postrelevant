(function($){
  App.Initializers.Pages = {
    index: function(){
      App.Modules.Nav.animateBrackets();
      App.Modules.Nav.scrollBackground();
    },

    contact: function(){
      App.Modules.Nav.animateBrackets($(".nav-rightbuttons ul li")[2]);
      App.Modules.Nav.scrollBackground();
    },

    approach: function(){
      App.Modules.Nav.animateBrackets($(".nav-rightbuttons ul li")[1]);
      App.Modules.Nav.scrollBackground();
    }
  };
})(jQuery);