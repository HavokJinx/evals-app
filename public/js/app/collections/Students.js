define(["jquery","backbone","models/Student"],
		function($, Backbone, Student) {
			// Creates a new Backbone Collection class object
			var Collection = Backbone.Collection.extend({
				// Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
				model: Student,
				// TODO: this url should be dinamic depending on what quesitionare the user is looking for.
				url:function(){
					return "/data/students.json";
				},

				parse : function(response) {
					if(response.students )
						return response.students;
					else
						throw "Error: Question's Collection could not fetch";
				}
			});

			return Collection;
		});