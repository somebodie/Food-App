var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var IngredientSchema = new Schema({
    name: String,
    qty: String
})

var MealSchema = new Schema({
    name: String,
    ingredients: [IngredientSchema],
    date: Date,
    _creator: {
        type: String,
        ref: 'User'
    }
});

var UserSchema = new Schema({
    name: String,
    email: String,
    password_digest: String,
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: 'Meal'
    }]
});


UserSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;

    if (!this.created_at) {
        this.created_at = now
    }
    next()
});

MealSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;

    if (!this.created_at) {
        this.created_at = now
    }
    next()
});

IngredientSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;

    if (!this.created_at) {
        this.created_at = now
    }
    next()
});

var IngredientModel = mongoose.model('Ingredient', IngredientSchema);
var UserModel = mongoose.model('User', UserSchema);
var MealModel = mongoose.model('Meal', MealSchema);

module.exports = {
    Ingredient: IngredientModel,
    User: UserModel,
    Meal: MealModel
}
