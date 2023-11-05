export default function Page({params}: {params: { slug: string[] }}) {
    return (<>
                <div>optional slug: {params.slug}</div>
            </>)
}