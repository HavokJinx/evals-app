define( ['App', 'backbone', 'marionette', 'jquery', 'models/Student', 'hbs!templates/student'],
	function(App, Backbone, Marionette, $, Model, template) {
		//ItemView provides some default rendering logic
		return Backbone.Marionette.ItemView.extend( {
			template: template,
			model: new Model({
				question: "student..."
			}),
			attributes:{
				class:"row student"
			},
			// View Event Handlers
			events: {

			}
		});
	});