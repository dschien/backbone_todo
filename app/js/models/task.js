/**
 * Created by schien on 07/11/2013.
 */
define(function() {
    var Task = Backbone.Model.extend({
        url: 'tasks'
    });

    return Task;
});