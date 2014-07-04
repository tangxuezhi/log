var MONGO_PORT = "27017",
    MONGO_DATABASE = "library";

var MongoClient = require('mongodb').MongoClient,
    Server = require('mongodb').Server;

// Set up the connection to the local db
var mongoclient = new MongoClient(new Server("localhost", MONGO_PORT), {native_parser: true});

function Collection(collectionName){
    this.db = null;
    this.collection = null;
    this.collectionName = collectionName;
    this.executeNames = {
        "insert" : 1,
        "delete" : 2,
        "find" : 3
    };
    this.responseObj = {};
}

Collection.prototype.run = function(callback){
    var _this = this;
    mongoclient.open(function(err, mongoclient){
        _this.db = mongoclient.db(MONGO_DATABASE);
        _this.collection = _this.db.collection(_this.collectionName);
        callback();
    });
};

Collection.prototype.close = function(){
    this.db.close();
};


/*
    Collection.prototype.execute - use to execute the document in database 
    
    Options
        @ executeName (String) - the name should be one of ["insert", "delete", "find", "count"]
        @ query (Object) - a json data for "insert", or a selector for "delete" or "find"
        @ option (Object) - an object contains some limited condition, like {w : 1}

    Returns
        null

*/

Collection.prototype.execute = function(executeName, query, option, callback){
    if(!this.executeNames[executeName]){
        this.responseObj.error = "The executeName is not exist";
    }

    var _this = this;

    this.run(function(){
        var collection = _this.collection;

        if(executeName !== "find"){
            collection[executeName](query, option, function(error, result) {
                _this.responseObj.error = error;
                _this.responseObj.result = result; 
                callback(_this.responseObj);
            });
        }else{
            collection[executeName](query, option).toArray(function(error, result) {
                _this.responseObj.error = error;
                _this.responseObj.result = result; 
                callback(_this.responseObj);
            });
        }
        
    });
}

Collection.prototype.update = function(selector, document, option, callback){
    var _this = this;

    this.run(function(){
        var collection = _this.Collection;
        collection[executeName](selector, document, option, function(error, result) {
            _this.responseObj.error = error;
            _this.responseObj.result = result; 
            callback(_this.responseObj);
        });
    });
}



exports.Collection = Collection;