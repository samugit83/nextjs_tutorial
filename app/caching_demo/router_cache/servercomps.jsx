'server only'

export const SSRComp = async () => {

    const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
    const data = await res.json()

    return (
        <div style={{marginTop: '30px'}}>
           Data fetched from an SSR comp: {data.fact}  
        </div>
    )

}
