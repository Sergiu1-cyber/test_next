import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const data = await req.json()

    try {
        await sql`INSERT INTO tipul(tipul, numele) VALUES(${data.tipul}, ${data.denumirea})`;
    } catch(error) {
        return NextResponse.json({msg: error})
    }

    const info = await sql`SELECT * FROM tipul`;
    return NextResponse.json({msg: info});

//    return NextResponse.json({msg: data})
}


