'use client'

import React, { useState, useEffect } from "react";

export const ButtonComp = () => {

    const [fetchedDStatus, setFetchedStatus] = useState("Revalidate")

    const fetchData = async () => {
  
        setFetchedStatus("Revalidating...");
  
      try {
        const response = await fetch('http://localhost:3000/api/revalidate?mytag=catinfo');
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        setFetchedStatus("Revalidated!");
  
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
  
    return (
        <button className="cache_data_button" type="button" onClick={fetchData}>{fetchedDStatus}</button>
    )
  
  }  
  
  
