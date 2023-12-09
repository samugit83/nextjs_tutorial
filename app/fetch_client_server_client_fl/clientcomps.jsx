'use client'
import {useState, useEffect} from 'react';
import {serverAction} from './serveraction'

export const CSRComp = ({data}) => {

    return (
        <div>
        <span style={{color: "blue"}}>this is the page that fetch data on first load and send data to CSR comp as prop, this is the data</span> {data.fact}
      </div>
    )

}

export const CSRCompA = ({children}) => {

    return (
        <>
         {children}
        </>
    )

}

export const CSRCompS = () => {
  
    const [fetchedData, setFetchedData] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            try {
                let data = await serverAction()
                setFetchedData(data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData()

    }, [])

    return (
          <div>
            <span style={{color: "blue"}}>
            this is a CSR comp that fetch data from a server action on first load.
            this is the data:
            </span> {!fetchedData ? 'Loading....' : fetchedData.fact}
          </div>
      )

}

export const CSRCompB = () => {

    const [fetchedData, setFetchedData] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/fetching?fetch_type=data_usage_client', {next: {revalidate: 0}});

                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
    
                const data = await response.json();
                setFetchedData(data)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData()

    }, [])


  return (
    <>
      <div><span style={{color: "blue"}}>
        this is a CSR comp that send an API CALL to route handler, on first load, that use data to the client. 
        this is the data:
      </span> {!fetchedData ? 'Loading....' : fetchedData.fact}
      </div>
    </>
  )

}



export const CSRCompC = ({promises}) => {

  const [fetchedData, setFetchedData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      let data_array = await Promise.all(promises)

      console.log(data_array)
      setFetchedData(data_array);
    };

    getData();
  }, []);



  return (
      <div>
        <span style={{color: "blue"}}>
          this is a CSR comp that receive promises on first load from SSR and render data after promise.all. 
          this is the data:
        </span> {!fetchedData ? 'Loading....' : fetchedData.map(item => {
        return <p key={item.fact}>{item.fact}</p>}
        )}
      </div>

  )


}  




