'use client'

import {useEffect} from 'react';
import {serverActionA} from './serveractions.js'

export const CSRComp = ({children}) => {

    return (
        <>
            {children}
        </>
        )

}

export const CSRCompA = () => {

    useEffect(() => {
        serverActionA()
    }, []);

    return (
        <div style={{color: "blue"}}>
            this is a CSR comp that activate a server action on first load, and use the fetched data on the server.
        </div>
    )

}

export const CSRCompB = () => {

    useEffect(() => {
        fetch('http://localhost:3000/api/fetching?fetch_type=data_usage_server', {next: {revalidate: 0}})
    }, [])

    return (<div style={{color: "blue"}}>this is a CSR comp that send an API call to route handler, on first load, that use data on the server.</div>)

}