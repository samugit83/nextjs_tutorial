'use client'

import {useState} from 'react';


export const CSRCompA = () => {

  const [fetchedData, setFetchedData] = useState()

    const fetchData = async () => {
      try {
        setFetchedData("Loading...");
        const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
        const data = await res.json()
        setFetchedData(data.fact);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


  return (
    <>
      <div><span style={{color: "blue"}}>
        this is a CSR comp that fetch data from browser, on user event, and use fetched data on the client.<br/>
        <button style={{border: "1px solid gray", padding: "5px", borderRadius: "8px"}} onClick={fetchData}>Fetch data</button>
        </span> 
        {fetchedData}
      </div>
    </>
  )


}  




