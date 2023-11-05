export default function Page({params}: {params: {slug: string}}) {
    return <div>My dynamic route: {params.slug}</div>
}


export function generateStaticParams() {
    return [{ slug: 'a' }, { slug: 'b' }, { slug: 'c' }]
}