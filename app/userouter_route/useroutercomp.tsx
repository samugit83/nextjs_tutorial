'use client'

import React, {useEffect} from 'react'
import {useRouter} from 'next/navigation'


export function RouterComp() {
    const router = useRouter()

    useEffect(() => {
        router.prefetch('/wait_route')
    }, []);


return (

    <>
        <button type="button" onClick={() => router.push('/new_route_a')}>
            New Route A
        </button><br/>
        <button type="button" onClick={() => router.push('/new_route_b')}>
            New Route B
        </button><br/>
        <button type="button" onClick={() => router.replace('/new_route_c')}>
            New Route C
        </button><br/>     
        <button type="button" onClick={() => router.refresh()}>
            Refresh
        </button><br/>    
        <button type="button" onClick={() => router.forward()}>
            Forward
        </button><br/>   
        <button type="button" onClick={() => router.back()}>
            Back
        </button>     
    </>

)

}  