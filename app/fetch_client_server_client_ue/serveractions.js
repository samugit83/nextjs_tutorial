'use server'
import fs from 'fs';

export async function serverActionA(data) {
    let formdata = data.get('todo')
    const filePath = './serverfilexample.txt';

    fs.appendFile(filePath, `server action from CSR form with action prop, that also return data to client. ${formdata}`, (err) => {
        if (err) {
          console.error('Error appending to file:', err);
        } else {
          console.log('New row added successfully!');
        } 
    });

    const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
    const apidata = await res.json()
  
    return {message: apidata.fact}

}