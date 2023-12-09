import { SSRComp, SSRCompInCSR } from './servercomps'
import { CSRCompA, CSRCompB, CSRCompC, CSRComp} from './clientcomps'
import axios from 'axios';

export default async function Page() {

const res = await fetch('https://catfact.ninja/fact', {next: {revalidate: 0}})
const data = await res.json()



const apiPromises = [];

const makeApiCall = async (url) => {
  return axios.get(url)
    .then(response => response.data)
    .catch(error => {
      console.error(`Error making API call to ${url}: ${error.message}`);
      throw error;
    });
};

const apiUrls = [
  'https://catfact.ninja/fact',
  'https://catfact.ninja/fact',
  'https://catfact.ninja/fact',
  'https://catfact.ninja/fact',
  'https://catfact.ninja/fact']

apiUrls.forEach(url => {
  apiPromises.push(makeApiCall(url));
});
    

  return (
    <div style={{margin: "10px"}}>
        <span style={{color: "blue"}}>this is the page (SSR) that fetch data on first load and use data on the client, this is the data</span> {data.fact}
        <CSRComp data={data} />
        <SSRComp />
        <CSRCompA>
          <SSRCompInCSR />
        </CSRCompA>
        <CSRCompB />
        <CSRCompC promises={apiPromises} />
    </div>   
  )

}
