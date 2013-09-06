define( ['App', 'backbone', 'marionette', 'jquery', 'underscore', 'views/QuestionView', 'template/studentListHeader'],
		function(App, Backbone, Marionette, $, _ , QuestionView , headerTpl) {
			return Backbone.Marionette.CompositeView.extend({
				itemView: QuestionView
				, template: headerTpl
				, appendHtml: function(collectionView, itemView){
					collectionView.$(".body").append(itemView.el);
				}
				//collection: Questions //,
				//emptyView:"nothing"
			});
});