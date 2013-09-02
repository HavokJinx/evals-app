define(['App', 'backbone', 'marionette', 'views/QuestionsView', 'views/DesktopHeaderView', 'collections/Questions'],
	function (App, Backbone, Marionette, QuestionsView, DesktopHeaderView , Questions) {
	return Backbone.Marionette.Controller.extend({
		initialize:function (options) {
			App.headerRegion.show(new DesktopHeaderView());
		},
		//gets mapped to in AppRouter's appRoutes
		index:function () {

			var questionsColl =new Questions();
			questionsColl.fetch();
			var questions = new QuestionsView({collection: questionsColl });

			App.mainRegion.show(questions);
}
	});
});