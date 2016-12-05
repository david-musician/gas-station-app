var mongoose = require('mongoose');

//utility method for the module
var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
}
