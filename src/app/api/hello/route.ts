
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const url = request.nextUrl;
  if (url.searchParams.has("name")) {
    const name=url.searchParams.get("name")
    return new NextResponse("Hello "+name);
  } else {
    return new NextResponse("provide name");
  }
};



export async function POST(request:NextRequest){
  const body=await request.json();

  return new NextResponse(JSON.stringify(body))
    
}
