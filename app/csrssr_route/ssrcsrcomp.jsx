import FancyText from './FancyText';
import InspirationGenerator from './InspirationGenerator';
import Copyright from './Copyright';

export default function SsrCsrComp() {
  console.log("SsrCsrComp is server rendered")

  return (
    <>
      <FancyText title text="Get Inspired App" comptype={"server rendered"} />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
    </>
  );
}
