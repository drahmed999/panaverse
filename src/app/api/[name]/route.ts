import { NextRequest,NextResponse } from "next/server";

export async function GET(request:NextRequest,{params}:{params:{name:string}}) {
    return NextResponse.json({
        From:params.name,
        message:"greetings",
        requestType:"get"
    })
    
}