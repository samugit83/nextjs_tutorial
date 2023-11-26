 
  export default async function Page() {

    const res = await fetch('https://catfact.ninja/fact', { next: { tags: ['cats'] } })
    const data = await res.json()
   
    return <main>{data.fact}</main>

  }

 