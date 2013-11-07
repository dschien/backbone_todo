/**
 * Created by schien on 07/11/2013.
 */
define(['models/tasklist'], function(TaskList) {
    var TaskLists = Backbone.Collection.extend({
        model: TaskList
        , url: 'tasklists'
    });

    return TaskLists;
});