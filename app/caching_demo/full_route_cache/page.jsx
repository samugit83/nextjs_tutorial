
import {ButtonComp} from './clientcomps.jsx'

export default async function Page() {

const res = await fetch('https://catfact.ninja/fact', { next: { tags: ['catinfo'] }}  )
const data = await res.json()



  return (
    <div style={{margin: "20px"}}>
      <p style={{fontWeight: 'bold'}}>FULL ROUTE CACHE DEMO</p>
      This route was statically rendered during the build time,<br/>
      incorporating data retrieved from an endpoint that return different data on each request.<br/>
      When you refresh the page, the data remains static due to a full route cache, persisting indefinitely until a validation process occurs.<br/><br/>
      Fetched data: <div className={'cache_data_cont'}>{data.fact}</div><br/><br/>
      <ButtonComp/>
    </div>   
  )

}

