'use client'

import {serverActionA} from "./serveractions.js"

export const CSRCompA = () => {

    const fetchData = async () => {
      const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
      const data = await res.json()
      serverActionA(data)
    };


    return (
      <>
        <div>
          this is a CSR comp that send an API CALL from the browser, on user event, and send data to server with server action. <br/>
          <button style={{border: "1px solid gray", padding: "5px", borderRadius: "8px"}} onClick={fetchData}>Invoke server action</button>
        </div>
      </>
    )
  
  
  }  



  
  export const CSRCompB = () => {

    const fetchData = async () => {
        const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}});
        const data = await res.json();
        await fetch('http://localhost:3000/api/fetching', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

    };
          

  return (
      <div>
        this is a CSR comp that send an API CALL from the browser, on user event, and send data to server with route handler POST request. <br/>
        <button style={{border: "1px solid gray", padding: "5px", borderRadius: "8px"}} onClick={fetchData}>Send route handler api call</button>
      </div>
  )


}  
