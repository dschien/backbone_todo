/**
 * Rename to api-config
 * and set according to needs.
 */
define([], function() {
    var config = {};
    config.apiKey = 'your API key';
    config.scopes = 'https://www.googleapis.com/auth/tasks https://www.googleapis.com/auth/userinfo.profile';
    config.clientId = 'your client ID';

    _.templateSettings = {
        interpolate: /\{\{(.+?)\}\}/g
    };

    return config;
});