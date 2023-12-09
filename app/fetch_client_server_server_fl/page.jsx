
import fs from 'fs'
import {CSRComp, CSRCompA, CSRCompB} from './clientcomps'
import {SSRComp, SSRCompInCSR} from './servercomps'

export default async function Page() {

    const res = await fetch('https://catfact.ninja/fact', {next: {revalida: 0}});
    const data = await res.json();

    const filePath = './serverfilexample.txt';

    fs.appendFile(filePath, `action from the page: ${data.fact}\n`, (err) => {
        if(err) {
            console.error('Error appending the file:', err)
        } else {
            console.log('New row added successfully!')
        }

    })

    return (
        <div style={{margin: "10px"}}>
            <span style={{color: "blue"}}>Data dispatched on the server, fetching invoked from the page</span>
            <SSRComp />
            <CSRComp>
               <SSRCompInCSR />
            </CSRComp>
            <CSRCompA />
            <CSRCompB />
        </div>
    )
};