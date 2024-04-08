import { networkImageSrc } from "../../constants";

export function CardNetwork({ network }) {
  return (
    <div>
      <img src={networkImageSrc[network]} alt="logo" className="w-full" />
    </div>
  );
}
