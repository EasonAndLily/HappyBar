var mongoose = require('mongoose');
var Promise = require('promise');

var comedySchema = new mongoose.Schema({
    name : String,
    title : String,
    subTitle : String,
    playTime : String,
    poster: String,
    periods : String,
    description : String,
    video: String,
    playAmount: Number,
    thumbsUpAmount: Number,
    collectAmount: Number,
});

comedySchema.statics = {
    getAllComedies: function(sort) {
        return new Promise((resolve, reject) => {
            this.find().sort(sort).exec((err, data) => {
                if(err) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    },
    getComedyById : function(id, callBack){
        return this.findOne({_id:id}).exec(callBack);
    },
    getCommdiesByConditions : function(findCondition, limitNumber, skipeNumber, sort, callBack){
        return new Promise((resolve, reject) => {
            this.find(findCondition).limit(limitNumber).skip(skipeNumber).sort(sort).exec((err, data) => {
                if(err) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });

        //return this.find(findCondition).limit(limitNumber).skip(skipeNumber).sort(sort).exec(callBack);
    },
    insertCommdy : function(comedy){
        this.insert(comedy);
    }
};

module.exports = comedySchema;