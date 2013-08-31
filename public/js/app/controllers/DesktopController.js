define(['App', 'backbone', 'marionette', 'views/QuestionView', 'views/DesktopHeaderView'],
    function (App, Backbone, Marionette, QuestionView, DesktopHeaderView) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            App.headerRegion.show(new DesktopHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {
            App.mainRegion.show(new QuestionView());
        }
    });
});