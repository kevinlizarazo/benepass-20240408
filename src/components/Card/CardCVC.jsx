export function CardCVC({ cvc, obfuscated }) {
  return (
    <div className="flex flex-col font-semibold">
      <span className="text-xs text-indigo-20">CVC</span>
      <span className={`${obfuscated ? 'text-2xl font-bold tracking-wide leading-[1.75rem]' : 'text-lg'}`}>
        {obfuscated ? '•••' : cvc}
      </span>
    </div>
  );
}