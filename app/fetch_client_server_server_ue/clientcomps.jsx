'use client'

import {serverActionA, serverActionB} from './serveractions.js'

export function AddForm() {

   return (
     <>
       <form action={serverActionA}>
         <label htmlFor="todo">Enter Task</label>
         <input type="text" id="todo" name="todo" required/>
         <button style={{border: "1px solid gray", padding: "5px", borderRadius: "8px"}} type="submit">Submit</button>
       </form>
     </>
 
   )
 }
 

export function CSRCompA() {

      return <button onClick={() => serverActionB('same data to save')}>Invoke server action</button>

}

export const CSRCompB = () => {

   const callRoute = async () => {
     fetch('http://localhost:3000/api/fetching?fetch_type=data_usage_server', {next: {revalidate: 0}})
   }
 
   return (<button style={{border: "1px solid gray", padding: "5px", borderRadius: "8px"}} onClick={callRoute}>callRoute</button>)
 
 }  
 