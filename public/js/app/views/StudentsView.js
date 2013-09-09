define( ['App', 'backbone', 'marionette', 'jquery', 'underscore', 'views/StudentView', 'hbs!templates/studentListHeader'],
		function(App, Backbone, Marionette, $, _ , StrudentView , headerTpl) {
			return Backbone.Marionette.CompositeView.extend({
				itemView: StrudentView
				, template: headerTpl
				, appendHtml: function(collectionView, itemView){
					collectionView.$(".body").append(itemView.el);
				}
				//collection: Questions //,
				//emptyView:"nothing"
			});
});