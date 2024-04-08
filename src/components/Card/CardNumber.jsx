export function CardNumber({ number, obfuscated }) {

  const cardNumberArray = number.split(" ");
  const cardNumberLast4 = cardNumberArray[3];

  return (
    <>
      {obfuscated ? (
        <div className="text-2xl font-semibold"><span className="font-bold tracking-wide mr-2">••••</span> {cardNumberLast4}</div>
      ) : (
        <>
          {cardNumberArray.map((cardNumber, index) => (
            <div key={index} className={`flex flex-wrap text-2xl font-semibold mr-2`}>
              <span>{cardNumber}</span>
            </div>
          ))}
        </>
      )}
    </>
  );
}
