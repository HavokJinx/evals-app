define( ['App', 'backbone', 'marionette', 'jquery', 'models/Question', 'hbs!templates/question'],
    function(App, Backbone, Marionette, $, Model, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend( {
            template: template,
            model: new Model({
                question: "question..."
            }),

            // View Event Handlers
            events: {

            }
        });
    });