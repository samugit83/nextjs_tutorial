'use server'

import fs from 'fs';

export async function serverActionA(data) {
    
    let formdata = data.get('todo')
    const filePath = './serverfilexample.txt';
  
    fs.appendFile(filePath, `server action from CSR form with action prop: ${formdata}\n`, (err) => {
        if (err) {
          console.error('Error appending to file:', err);
        } else {
          console.log('New row added successfully!');
        } 
    });
  
  }

  export async function serverActionB(data) {

    const filePath = './serverfilexample.txt';
  
    fs.appendFile(filePath, `server action invoked from CSR comp bt the user: ${data}\n`, (err) => {
        if (err) {
          console.error('Error appending to file:', err);
        } else {
          console.log('New row added successfully!');
        } 
    });
  
  }
  

