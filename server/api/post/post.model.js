/**
 * Created by youngmoon on 12/19/14.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Ninja = require('tracer').console({
  format : "({{file}}:{{line}}) : {{message}}"
});

Ninja.debug(mongoose);
Ninja.debug(Schema);


var PostSchema = new Schema({
  title: String,
  caption: String,
  tags: [String],
  writer: String
});

//PostSchema
//  .virtual('caption')
//  .get(function () {
//    return this.writer;
//  });

module.exports = mongoose.model('Post', PostSchema);
