'use server'

import fs from 'fs';

export const serverActionA = async () => {

    const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
    const data = await res.json()
    const filePath = './serverfilexample.txt';

    fs.appendFile(filePath, `server action from CSR comp (function in a separate file): ${data.fact}\n`, (err) => {
        if (err) {
          console.error('Error appending to file:', err);
        } else {
          console.log('New row added successfully!');
        } 
    });

};