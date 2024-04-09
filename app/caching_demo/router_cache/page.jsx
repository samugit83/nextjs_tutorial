
import {ButtonComp} from './clientcomps.jsx'
import {SSRComp} from './servercomps.jsx'

export default async function Page() {


  return (
    <div style={{margin: "20px"}}>
      <p style={{fontWeight: 'bold'}}>ROUTER CACHE DEMO</p>
      Calling router.refresh will invalidate the Router Cache and make a new request to the server for the current route.<br/>
      Refresh the current route. Making a new request to the server, re-fetching data requests, and re-rendering Server Components.<br/>
      Data on the server will be fetched following the revalidation setting on the fetch request, in this case revalidate = 0.<br/>
      The client will merge the updated React Server Component payload without losing unaffected client-side React (e.g. useState) or browser state (e.g. scroll position).<br/><br/>
      <ButtonComp/>
      <SSRComp />
    </div>   
  )

}

