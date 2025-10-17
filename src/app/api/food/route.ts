import { connectDB } from "@/lib/connectDB"
import Food from "@/models/Food";
import FoodCategory from "@/models/FoodCategory";
import { NextResponse } from "next/server";

export const POST = async (request: Request)=>{
    await connectDB();

    const food = await Food.create({
        foodName: "steak",
        price: 40000,
        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fiowagirleats.com%2Fperfect-grilled-steak-with-herb-butter%2F&psig=AOvVaw3LTHp56OOeH8dK_LeF0uQ1&ust=1760755274238000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPiPodiaqpADFQAAAAAdAAAAABAE",
        ingredients: "uhriin mah",
        category: "68f1955acea096e6fe9eabb8"
    })
    return NextResponse.json({
        message: "working", 
        food
    })
}

export const GET = async(request: Request)=>{
    await connectDB();
    FoodCategory;
    
    const foods = await Food.find().populate("category")
    return NextResponse.json({message: "working", foods})
}