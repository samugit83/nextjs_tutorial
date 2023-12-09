'server only'

export const SSRComp = async () => {

    const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
    const data = await res.json()

    return (
        <div>
           <span style={{color: "blue"}}>This is a SSR comp that fetch data on first load, that use data on the client, this is the data:</span> {data.fact}
        </div>
    )

}

export const SSRCompInCSR = async () => {

    const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
    const data = await res.json()
  
    return (
        <div>
            <span style={{color: "blue"}}>This is a SSR nested in a CSR comp that fetch data on first load, that use data on the client, this is the data:</span> {data.fact}
        </div>
    )

}