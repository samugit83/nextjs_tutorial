'server only'

import fs from 'fs';

export function AddSSRForm() {

    async function serverActionC(data) {
        'use server'

        let formdata = data.get('todo')
        const filePath = './serverfilexample.txt';
    
        fs.appendFile(filePath, `server action from Server only form with action prop: ${formdata}\n`, (err) => {
            if (err) {
                console.error('Error appending to file:', err);
            } else {
                console.log('New row added successfully!');
            } 
        });

    }

    async function serverActionE() {
        'use server'

        const filePath = './serverfilexample.txt';
    
        fs.appendFile(filePath, `server action from fake form with formAction prop.\n`, (err) => {
            if (err) {
                console.error('Error appending to file:', err);
            } else {
                console.log('New row added successfully!');
            } 
        });
    
    }



    return (
        <>
        <form action={serverActionC}>
            <label htmlFor="todo">Enter Task</label>
            <input type="text" id="todo" name="todo" required />
            <button style={{border: "1px solid gray", padding: "5px", borderRadius: "8px"}} type="submit">Submit</button>
        </form>
        <form>
            <button style={{border: "1px solid gray", padding: "5px", borderRadius: "8px"}} formAction={serverActionE}>Fake form event SSR</button>
        </form>
        </>
    )

}