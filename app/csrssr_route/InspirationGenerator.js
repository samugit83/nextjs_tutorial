'use client';

import { useState } from 'react';
import inspirations from './inspirations';
import FancyText from './FancyText';

export default function InspirationGenerator({children}) {
  const [index, setIndex] = useState(0);
  const quote = inspirations[index];
  const next = () => setIndex((index + 1) % inspirations.length);

  console.log("InspirationGenerator is client rendered")

  return (
    <>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} comptype={"client rendered"}/>
      <button onClick={next}>Inspire me again</button>
      {children}
    </>
  );
}