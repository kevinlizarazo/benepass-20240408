import { logoImageSrc, designTypeConstants } from "../../constants";

export function CardLogo({design}) {

  let color = "white";
  switch (design) {
    case designTypeConstants.TYPE3:
      color = "white";
      break;
    default:
      color = "black";
      break;
  }

  return (
    <div>
      <img src={logoImageSrc[color]} alt="logo" className="w-full" />
    </div>
  );
}