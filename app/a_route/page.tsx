import Link from 'next/link'

let linkobj = [
    {id: 'c_route',
     slug: 'c_route',
     title: 'Route C'},
    {id: 'd_route',
     slug: 'd_route',
     title: 'Route D'},
    {id: 'e_route',
     slug: 'e_route',
     title: 'Route E'},
     {id: 'awesome_route',
     slug: 'awesome_route',
     title: 'Route awesome'}
]

export default function LinkPage() {

  return (
    <>
     <Link href="/b_route" >Route B</Link>
     <ul>
        {linkobj.map((item) => (
            <li key={item.id}>
                <Link href={`/${item.slug}`}>{item.title}</Link>
            </li>))
        }
     </ul>
     <Link href={{pathname: '/b_route', query: {name: 'sam'}}}>
        B route with params
     </Link><br/>
     <Link href="b_route" replace>B route with replace</Link><br/>
     <Link href="/wait_route" prefetch={true}>prefetching route</Link>
    </>

  )

} 