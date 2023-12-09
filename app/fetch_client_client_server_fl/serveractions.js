'use server'
import fs from 'fs';


export async function serverActionA(data_from_client) {

    const filePath = './serverfilexample.txt';
  
    fs.appendFile(filePath, `server action from CSR comp, data retrieved from a browser API call, on first load: ${data_from_client.fact}\n`, (err) => {
        if (err) {
          console.error('Error appending to file:', err);
        } else {
          console.log('New row added successfully!');
        } 
    });
  
  }
  
  
  
  