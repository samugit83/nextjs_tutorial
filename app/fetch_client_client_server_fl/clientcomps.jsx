'use client'

import {useEffect} from 'react';
import { serverActionA } from './serveractions.js';


export const CSRCompA = () => {

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
            const data = await res.json()
            serverActionA(data)
        }

        fetchData();
        
    }, [])


    return (
      <div>
        this is a CSR comp that send an API CALL from the browser, on first load, and send data to server with server action. 
      </div>
    )

};



export const CSRCompB = () => {

    useEffect(() => {
        
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
            
        fetchData();

    }, []);
  
  
  
    return (
        <div>
          this is a CSR comp that send an API CALL from the browser, on first load, and send data to server with route handler POST request. 
        </div>
    )
  
  
  }  