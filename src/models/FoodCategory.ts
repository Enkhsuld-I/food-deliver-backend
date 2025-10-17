import mongoose from "mongoose"
import {Schema, model, models} from "mongoose"

const FoodCategorySchema = new Schema ({
    categoryName: {type: String, required: true},
})

const FoodCategory = models.FoodCategory || model("FoodCategory", FoodCategorySchema);

export default FoodCategory