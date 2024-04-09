

export default async function Page() {

  const multifetch = async () => {

    const data_array = [];

    for (let x = 0; x < 5; x++) {
      const res = await fetch('https://catfact.ninja/fact?max_length=155');
      const data = await res.json();
      data_array.push(data.fact);
    }

    return data_array;

  }



  const multifetchChangeUrl = async () => {

    const data_array = [];
    const colors = ['red', 'green', 'blue', 'purple', 'orange'];

    for (let x = 0; x < 5; x++) {
      const res = await fetch(`https://catfact.ninja/fact?max_length=${150 + x}`);
      const data = await res.json();
      data_array.push({
        fact: data.fact,
        color: colors[x]
      });
    }

    return data_array;

  }

  let fetched_data = await multifetch();

  let fetched_data_churl = await multifetchChangeUrl();

  return (
    <div style={{margin: "20px"}}>
      <p style={{fontWeight: 'bold'}}>REQUEST MEMOIZATION DEMO</p>
      <div style={{marginTop: "10px"}}>
        Let&apos;s make five requests to the same URL: https://catfact.ninja/fact.<br/>
        The api service returns different data. If subsequent requests return the same data,<br/>
        it indicates that Next.js makes the request only once and caches the results for subsequent requests, because the URLs are identical<br/>
      </div>
      <div className={'cache_data_cont_2'}>
        {fetched_data.map(itm => {
          return (<p style={{color: 'blue'}} key={Math.random.toString()}>{itm}</p>)
        })}
      </div>
      <div style={{marginTop: "30px"}}>
        Let&apos;s make five requests to the different URL: https://catfact.ninja/fact adding a dinamic param max_length= 150 151 152 153 154....<br/>
        The api service returns different data. If subsequent requests return different data,<br/>
        it indicates that Next.js makes a new request for every different url, and doesn&apos;t cache any fetching data!<br/>
      </div>
      <div className={'cache_data_cont_2'}>
        {fetched_data_churl.map(item => {
          return (
            <p key={Math.random.toString()} style={{color: item.color}}>{item.fact}</p>
          );
        })}
      </div>
    </div>
  );

}