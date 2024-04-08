import { useState } from "react";
import { backgroundImageClass, cardProductDescriptions } from "../../constants";
import { CardLogo } from "./CardLogo";
import { CardNetwork } from "./CardNetwork";
import { CardNumber } from "./CardNumber";
import { CardTagIndicator } from "./CardTagIndicator";
import { Obfuscator } from "../ui/Obfuscator";
import { CardCVC } from "./CardCVC";
import { CardExpDate } from "./CardExpDate";
import { CardDescription } from "./CardDescription";

export function CardContainer({ data }) {
  const {
    cardNumber,
    expirationDate,
    securityCode,
    zipCode,
    cardTag,
    cardProduct,
    network,
    design,
  } = data;

  const [obfuscated, setObfuscated] = useState(true);

  const bgClass = backgroundImageClass[design];

  const checkboxHandler = e => {
    if (e.target.checked) {
      setObfuscated(false); // if checked, show details
    } else {
      setObfuscated(true);
    }
  };

  return (
    <div className="card-container m-8">
      <div className="card-description mb-8 text-left">
        <CardDescription 
          title={cardProductDescriptions[`${cardProduct}`].title} 
          description={cardProductDescriptions[`${cardProduct}`].description} 
        />
      </div>

      <div className="max-w-[392px] h-[272px] rounded-3xl overflow-hidden shadow-lg relative text-white sm:w-screen mb-5">
        <div className={`card-design ${bgClass} flex flex-col justify-between w-full h-full bg-no-repeat bg-cover p-6 rounded-xl overflow-hidden text-left`}>
         
          <div className="flex justify-between items-center">
            <CardLogo design={design} />
            <CardTagIndicator tag={cardTag} />
          </div>

          
          <div className='flex flex-grow mt-6'>
            <CardNumber number={cardNumber} obfuscated={obfuscated} />
          </div>

          <div className="flex gap-9 items-center flex-grow mb-8">
            <CardExpDate date={expirationDate} />
            <CardCVC cvc={securityCode} obfuscated={obfuscated} />
          </div>

          
          <div className="flex justify-between items-end">
            <div className="text-lg">ZIP {zipCode}</div>
            <CardNetwork network={network} />
          </div>

        </div>
      </div>

      <div className="ml-1">
        <Obfuscator clickHandler={checkboxHandler} />
      </div>
      
    </div>
  );
}
