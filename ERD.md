Individual Models:
User: {
  name: String,
  Email: String,
  Password: String,
  Schedule: []
}

Schedule: {
  Date: Date
  Day_of_week: String
  Ingredients: []
}

Ingredients: {
  [name: String,
  amount: String],
  Recommended_Recipe: []
}

Recommended_Recipe: {
  Name: String,
  Image: Link,
  Calories/Serving: Number,
}






User: {
  Name: String,
  Email: String,
  Password: String,
  Schedule:{  Date: Date,
              Day_of_Week: String,
              Ingredient: {  Ingredients: {
                                    [name: String,
                                    amount: String]},
                             Recommended Recipe:{ Name: String,
                                                  Image: Link,
                                                  Calories/Serving: Number,
                                                  Fat (in g): Number,
                                                  Protein(in g): Number,
                                                  Carbs (in g): Number}
                          }
            }
}
