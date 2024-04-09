//Single Dynamic Segment



export default function Page({params}: {params: {slug: string}}) {
    return <div>My dynamic route: {params.slug}</div>
}

// Three versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
// - /a
// - /b
// - /c

export function generateStaticParams() {
    return [{ slug: 'a' }, { slug: 'b' }, { slug: 'c' }]
}