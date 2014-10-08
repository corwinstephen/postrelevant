(function($, _){
  window.App = {
    Globals: {},
    Initializers: {}
  };

  $(document).ready(function(){
    var controllerName = _.capitalize(App.Globals.controllerName);
    var actionName = App.Globals.actionName;
    if(App.Initializers[controllerName] && App.Initializers[controllerName][actionName]){
      App.Initializers[_.capitalize(App.Globals.controllerName)][App.Globals.actionName]();
    }
  });
}
)(jQuery, _);