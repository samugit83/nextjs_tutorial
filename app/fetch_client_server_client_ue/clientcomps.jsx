'use client'

import { useState } from 'react';
import { serverActionA } from './serveractions.js'

export function AddForm() {
  const [respstate, setRespstate] = useState()
  
    let handleAction = async (formdata) => {
      let response = await serverActionA(formdata)
      setRespstate(response.message)
    }

  
    return (
      <form>
        <label htmlFor="todo">Enter Task</label>
        <input type="text" id="todo" name="todo" required />
        <button formAction={(formdata) => handleAction(formdata)} style={{border: "1px solid gray", padding: "5px", borderRadius: "8px"}} type="submit">Submit</button>
        <div>{respstate}</div>
      </form>
    )
  }
  

  export const CSRCompA = () => {

    const [fetchedData, setFetchedData] = useState()
  
    const fetchData = async () => {
  
      setFetchedData("Loading...");
  
      try {
        const response = await fetch('http://localhost:3000/api/fetching?fetch_type=data_usage_client', {next: {revalidate: 0}});
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const data = await response.json();
        setFetchedData(data.fact);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
  
    return (
      <>
        <div>
          this is a CSR comp that send an API CALL to route handler, onClick, that use data on the client. <br/>
          <button style={{border: "1px solid gray", padding: "5px", borderRadius: "8px"}} onClick={fetchData}>callRoute</button> <br/>
          this is the data: <br/>
          {fetchedData}
        </div>
      </>
    )
  
  }  
  
  
  