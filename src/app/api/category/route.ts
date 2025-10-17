import { connectDB } from "@/lib/connectDB"
import FoodCategory from "@/models/FoodCategory"
import { NextResponse } from "next/server"


export const GET = async (request: Request) =>{
    const category = await FoodCategory.find()
    return NextResponse.json(category)

}

export const POST = async (request: Request)=>{
    await connectDB()
    const body = await request.json()
    const category = await FoodCategory.create({
        categoryName : body.categoryName
    })
    return NextResponse.json({message: "Working", category})
}