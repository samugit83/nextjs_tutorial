import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
 
export async function GET(request) {

  const tag = request.nextUrl.searchParams.get('citydays')
  revalidateTag(tag)

  setTimeout(() => {
    fetch(`http://mettere ip server:3000/homeconsole/admin/${tag}`);
  }, 5000);
  

  return NextResponse.json({ revalidated: true, now: Date.now() })

}

