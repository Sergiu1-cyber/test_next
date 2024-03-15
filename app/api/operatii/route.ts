import connectDB from "@/actions/mongodb/connectDB"
import Operatii from "@/actions/mongodb/models/operatia"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const data = await req.json()

    try {
        await connectDB()
        await Operatii.create(data)
        return NextResponse.json({msg: {message: "date salvate"}})
    } catch(e) {
        console.log(e)
    }

}


