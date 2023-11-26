import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
 
export async function GET(request) {

  const tag = request.nextUrl.searchParams.get('mytag')
  revalidateTag(tag)

  setTimeout(() => {
    fetch(`http://ec2-15-160-183-19.eu-south-1.compute.amazonaws.com:3000/generation_route`);
  }, 5000);

  return NextResponse.json({ revalidated: true, now: Date.now() })

}
