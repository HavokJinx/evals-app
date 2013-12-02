define(['App', 'backbone', 'marionette'
	, 'views/DesktopHeaderView'
	, 'views/QuestionsView', 'collections/Questions'
	, 'views/StudentsView', 'collections/Students'],
	function (App, Backbone, Marionette
			, DesktopHeaderView
			, QuestionsView, Questions
			,StudentsView, Students) {
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
		},
		students:function () {

			var studentssColl =new Students();
			studentssColl.fetch();
			var students = new StudentsView({collection: studentssColl });

			App.mainRegion.show(students);
		},
		questions:function(){
			var questionsColl =new Questions();
			questionsColl.fetch();
			var questions = new QuestionsView({collection: questionsColl });
			App.mainRegion.show(questions);
		}
	});
});

