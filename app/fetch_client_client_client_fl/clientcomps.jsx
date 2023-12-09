'use client'

import {useState, useEffect} from 'react';


export const CSRCompA = () => {

  const [fetchedData, setFetchedData] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
        const data = await res.json()
        setFetchedData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  return (
    <>
      <div>
        <span style={{color: "blue"}}>
        this is a CSR comp that fetch data from browser, on first load, and use fetched data on the client. 
        this is the data:
      </span> {!fetchedData ? 'Loading....' : fetchedData.fact}
      </div>
    </>
  )


}  


