export default function Page({params}: {params: { slug: string, slug_b: string }}) {
    return (<>
                <div>slug: {params.slug}</div>
                <div>slug_b: {params.slug_b}</div>
            </>)
}



export function generateStaticParams() {
    return [
      { slug: 'a', slug_b: '1' },
      { slug: 'b', slug_b: '2' },
      { slug: 'c', slug_b: '3' },
    ]
  }