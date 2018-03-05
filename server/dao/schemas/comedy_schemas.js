var mongoose = require('mongoose');

var comedySchema = new mongoose.Schema({
    name : String,
    title : String,
    subTitle : String,
    playTime : String,
    playPath : String,
    poster : String,
    diagram : String,
    createTime : Date,
    updateTeime : Date,
    description : String,
    grade : Number,
    periods : String,
    playTimes : Number,
    praiseTimes :Number,
    category : String,
    author : String
});

comedySchema.statics = {
    // getComedyById : function(id, callBack){
    //     return this.findOne({_id:id}).exec(callBack);
    // },
    // getCommdiesByConditions : function(findCondition, limitNumber, skipeNumber, callBack){
    //     return this.find(findCondition).limit(limitNumber).skip(skipeNumber).sort({"periods":-1}).exec(callBack);
    // },
    // insertCommdy : function(comedy){
    //     this.insert(comedy);
    // }
    // getComedyById: function(id, callBack) {
    //     let query = this.findOne({_id:id});
    //     let promise = query.exec();
    //     promise.then((comedy) => {
    //         callBack(comedy);
    //     });
    // }
};

module.exports = comedySchema;