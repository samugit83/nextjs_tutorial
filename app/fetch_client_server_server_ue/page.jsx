import {AddForm, CSRCompA, CSRCompB} from './clientcomps'
import {AddSSRForm} from './servercomps'
import fs from 'fs';

export default async function Page() {

    async function serverActionD() {
        'use server'
        const filePath = './serverfilexample.txt';
    
        fs.appendFile(filePath, `server action from Page form with action prop.\n`, (err) => {
            if (err) {
                console.error('Error appending to file:', err);
            } else {
                console.log('New row added successfully!');
            } 
        });
    
    }

    return (
        <div style={{margin: "10px"}}>
            <AddForm />
            <CSRCompA />
            <AddSSRForm />
            <form>
               <button formAction={serverActionD}>Fake form event Page</button>
            </form>
            <CSRCompB />
        </div>
    )

}