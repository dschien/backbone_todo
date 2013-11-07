/**
 * Created by schien on 07/11/2013.
 */
define(function() {
    var TaskList = Backbone.Model.extend({
        url: 'tasklists'
    });

    return TaskList;
});