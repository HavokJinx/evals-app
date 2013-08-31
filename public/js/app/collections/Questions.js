define(["jquery","backbone","models/Question"],
  function($, Backbone, Question) {
    // Creates a new Backbone Collection class object
    var Collection = Backbone.Collection.extend({
      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: Question
    });

    return Collection;
  });