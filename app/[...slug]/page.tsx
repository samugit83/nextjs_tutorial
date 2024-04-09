

export default function Page({params}: {params: {slug: string[]}}) {
    return <div>Catch-all Segments: {params.slug}</div>
}

