

export default function Page({params}: {params: {slug: string[]}}) {
    return <div>Catch-all Segments: {params.slug}</div>
}

export function generateStaticParams() {
    return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }]
  }