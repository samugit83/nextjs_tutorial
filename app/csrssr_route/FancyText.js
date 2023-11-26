export default function FancyText({title, text, comptype}) {

  console.log(`FancyText is ${comptype}`)

    return title
      ? <h1 className='fancy title'>{text}</h1>
      : <h3 className='fancy cursive'>{text}</h3>
  }
  