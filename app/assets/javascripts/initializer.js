(function($, _){
  window.App = {
    Globals: {},
    Initializers: {},
    Modules: {}
  };

  var ready = function(){
    var controllerName = App.Globals.controllerName;
    var actionName = App.Globals.actionName;
    if(App.Initializers[controllerName] && App.Initializers[controllerName][actionName]){
      App.Initializers[App.Globals.controllerName][App.Globals.actionName]();
    }
  };

  $(document).ready(ready);
  $(document).on('page:load', ready);
}
)(jQuery, _);