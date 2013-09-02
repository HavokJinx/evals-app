/**
 * Created with JetBrains WebStorm.
 * User: pitukia
 * Date: 9/1/13
 * Time: 8:10 PM
 * To change this template use File | Settings | File Templates.
 */
define(["jquery", "backbone"],
		function($, Backbone) {
			// Creates a new Backbone Model class object
			var Model = Backbone.Model.extend({

				// Model Constructor
				initialize: function() {

				},

				// Default values for all of the Model attributes
				defaults: {

				},

				// Get's called automatically by Backbone when the set and/or save methods are called (Add your own logic)
				validate: function(attrs) {

				}

			});

			// Returns the Model class
			return Model;

		}

);
