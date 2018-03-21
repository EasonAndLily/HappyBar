var mongoose = require('mongoose');
let Schema = mongoose.Schema;
var comedyNameCategroySchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    comedies: [{type: Schema.Types.ObjectId, ref: 'comedy' }]
});
comedyNameCategroySchema.statics = {
    getComediesUnderCategory: function(groupCount) {
        return new Promise((resolve, reject) => {
            this.find({}).populate({
                path: 'comedies',
                options: {limit: groupCount}
            }).exec((err, data) => {
                if(err) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        });
    }
}
module.exports = comedyNameCategroySchema;