export default function Page({params}: {params: {slug: string}}) {
    return <div>My dynamic route: {params.slug}</div>
}