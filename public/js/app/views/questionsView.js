define( ['App', 'backbone', 'marionette', 'jquery', 'underscore', 'views/QuestionView', 'collections/Questions'],
		function(App, Backbone, Marionette, $, _ , QuestionView , Questions) {
			return Backbone.Marionette.CollectionView.extend({
				itemView: QuestionView
				, template: _.template("<tbody class='_contents'></tbody>")
				,tagName: 'div'
				//collection: Questions //,
				//emptyView:"nothing"
			});
});