export function CardExpDate({ date }) {
  return (
    <div className="flex flex-col font-semibold">
      <span className="text-xs text-indigo-20">VALID THRU</span>
      <span className="text-lg">{date}</span>
    </div>
  );
}