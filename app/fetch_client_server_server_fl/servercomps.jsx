'server only'

import fs from 'fs';

export const SSRComp = async () => {

    const res = await fetch('https://catfact.ninja/fact', {next: {revalida: 0}});
    const data = await res.json();
    const filePath = './serverfilexample.txt';

    fs.appendFile(filePath, `action from the ssr comp: ${data.fact}\n`, (err) => {
        if(err) {
            console.error('Error appending the file:', err)
        } else {
            console.log('New row added successfully!')
        }

    })

    const ServerAct = async () => {

        'use server'

        const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
        const data = await res.json()
        const filePath = './serverfilexample.txt';
    
        fs.appendFile(filePath, `server action from the ssr comp (use server on top of body function): ${data.fact}\n`, (err) => {
            if (err) {
              console.error('Error appending to file:', err);
            } else {
              console.log('New row added successfully!');
            }
        }); 

    };

    ServerAct();


    return (
        <div>
            <span style={{color: "blue"}}>this is a SSR comp that trigger some fetching in first loadm with data usage on the server</span>
        </div>
    )

};




export const SSRCompInCSR = async () => {

    const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
    const data = await res.json()
    const filePath = './serverfilexample.txt';
  
    fs.appendFile(filePath, `action from the SSR comp nested in CSR comp, on first load: ${data.fact}\n`, (err) => {
        if (err) {
          console.error('Error appending to file:', err);
        } else {
          console.log('New row added successfully!');
        }
    }); 

    return (
        <div>
            <span style={{color: "blue"}}>This is a SSR nested in a CSR comp that fetch data on first load, that use data on the server.</span>
        </div>
    )

};