import connectDB from "@/actions/mongodb/connectDB"
import Operatii from "@/actions/mongodb/models/operatia"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const data = await req.json()

    try {
        await connectDB()
        const op = new Operatii(data)
        console.log(op)
        await op.save()
        return NextResponse.json({msg: "date salvate"})
    } catch(e) {
        console.log(`Error in route.js : ${e}`)
    }

}


