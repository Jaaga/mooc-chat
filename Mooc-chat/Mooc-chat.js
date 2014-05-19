Messages=new Meteor.Collection('messages');
if (Meteor.isClient) {

   ////////// Helpers for in-place editing //////////
  
  // Returns an event_map key for attaching "ok/cancel" events to
  // a text input (given by selector)
  var okcancel_events = function (selector) {
    return 'keyup '+selector+', keydown '+selector+', focusout '+selector;
  };
  
  // Creates an event handler for interpreting "escape", "return", and "blur"
  // on a text field and calling "ok" or "cancel" callbacks.
  var make_okcancel_handler = function (options) {
    var ok = options.ok || function () {};
    var cancel = options.cancel || function () {};
  
    return function (evt) {
      if (evt.type === "keydown" && evt.which === 27) {
        // escape = cancel
        cancel.call(this, evt);
      } else if (evt.type === "keyup" && evt.which === 13) {
        // blur/return/enter = ok/submit if non-empty
        var value = String(evt.target.value || "");
        if (value)
          ok.call(this, value, evt);
        else
          cancel.call(this, evt);
      }
    };
  };

  Template.entry.events={};
  Template.entry.events[okcancel_events('#messageBox')] = make_okcancel_handler({
    ok: function (text,event){
      var nameEntry = document.getElementById('name');
      var ts = Date.now()/1000;
      Messages.insert({name:nameEntry.value,message: text,time: ts});
      event.target.value="";
    }
  });

  Template.messages.messages=function (){
    return Messages.find({},{sort:{time: -1}});
  }
}



ServiceConfiguration.configurations.remove
({
  service:"github"
});

ServiceConfiguration.configurations.insert
({
  service:"github",
  clientId:"874cdf2ce267f827e482",
  secret: "392d12a40e696900b875be4cd0adf87d3e464ba0"
  });

