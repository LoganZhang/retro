(function(){
Meteor.startup(function() { $('body').attr({"ng-app":"retrospective","ng-include":"'client/retro/retro.ng.html'","ng-controller":"RetrospectiveCtrl"}); });

Template.body.addContent((function() {
  var view = this;
  return "";
}));
Meteor.startup(Template.body.renderToDocument);

})();
