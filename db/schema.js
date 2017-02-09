var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var UserSchema = new Schema({
  name: String,
  email: String,
  password: String,
  Recipes: [Recipe Schema]
});

var MealSchema = new Schema({
  name: String,
  Ingredients: [],
  Date: Date
});

UserSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;

  if(!this.created_at) {this.created_at = now}
  next()
});

MealSchema.pre('save', function(next){
  now = new Date();
  this.updated_at = now;

  if(!this.created_at) {this.created_at = now}
  next()
});

var UserModel = mongoose.model('User', UserSchema);
var MealModel = mongoose.model('Meal', MealSchema);

module.exports = {
  User: UserModel,
  Meal: MealModel
}
