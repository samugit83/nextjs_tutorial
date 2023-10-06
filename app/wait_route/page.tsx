
export default async function WaitRoute() {
    await new Promise(resolve => setTimeout(resolve, 5000));

    return (
      <div>This is wait route</div>
    )
  
} 

export const dynamic = "force-dynamic"