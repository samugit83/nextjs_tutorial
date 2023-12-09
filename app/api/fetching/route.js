import {NextResponse} from 'next/server'
import fs from 'fs'

export async function GET(request) {

    const fetch_type = request.nextUrl.searchParams.get('fetch_type')

    if(fetch_type === 'data_usage_server') {

        const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
        const data = await res.json()
        const filePath = './serverfilexample.txt';

        fs.appendFile(filePath, `action from route handler: ${data.fact}\n`, (err) => {
            if (err) {
            console.error('Error appending to file:', err);
            } else {
            console.log('New row added successfully!');
            } 
        });

        return NextResponse.json({message: 'action dispatched on the server'})
    };

    if(fetch_type === 'data_usage_client') {

        const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
        const data = await res.json()

        return NextResponse.json(data)
    }

}


export async function POST(request) {

    const request_payload = await request.json()
    const filePath = './serverfilexample.txt';
  
    fs.appendFile(filePath, `data received from CSR with API CALL from the browser, (on first load or user event), and send data to server with route handler POST request: ${request_payload.fact}\n`, (err) => {
        if (err) {
          console.error('Error appending to file:', err);
        } else {
          console.log('New row added successfully!');
        }
    }); 
  
    return NextResponse.json({message: 'action dispatched on the server'})
  
  }