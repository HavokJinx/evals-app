define(["jquery","backbone","models/Question"],
  function($, Backbone, Question) {
    // Creates a new Backbone Collection class object
    var Collection = Backbone.Collection.extend({
      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: Question,
      // TODO: this url should be dinamic depending on what quesitionare the user is looking for.
      url:function(){
        return "/data/questions.json";
      },

      parse : function(response) {
        if(response.questions )
          return response.questions;
        else
          throw "Error: Student's Collection could not fetch";
      }
    });

    return Collection;
  });