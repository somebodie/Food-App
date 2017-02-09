User: {
  Name: String,
  Email: String,
  Password: String,
  Schedule:{  Date: Date,
              Day of Week: String,
              Ingredient: {  Main Ingredient: String,
                             Secondary Ingredient: String,
                             Recommended Recipe:{ Name: String,
                                                  Image: Link,
                                                  Calories/Serving: Number,
                                                  Fat (in g): Number,
                                                  Protein(in g): Number,
                                                  Carbs (in g): Number}}}
}
