import { useState } from 'react';

export function Obfuscator({ clickHandler }) {

  const [checked, setChecked] = useState(false);

  const checkHandler = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    clickHandler(e);
  }

  return (
    <div className="flex items-center relative"> {/* Added relative here */}
      <input
        id="default-checkbox"
        type="checkbox"
        className="appearance-none w-5 h-5 border border-gray-300 rounded bg-white cursor-pointer focus:outline-none checked:bg-brand checked:border-brand peer" // Removed specific border and rounded classes for the checked state
        onChange={(e) => checkHandler(e)}
      />

      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 10 7" 
        width="10"
        height="20"
        className="hidden peer-checked:block absolute text-white fill-current ml-[5px] mt-0.5 pointer-events-none"
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M9.31172 0.183057C9.56276 0.427139 9.56276 0.822864 9.31172 1.06695L4.16886 6.06695C3.91781 6.31102 3.51078 6.31102 3.25972 6.06695L0.688287 3.56695C0.437238 3.32288 0.437238 2.92714 0.688287 2.68306C0.939342 2.43899 1.34637 2.43899 1.59743 2.68306L3.71429 4.74114L8.40259 0.183057C8.65363 -0.0610189 9.06069 -0.0610189 9.31172 0.183057Z" />
      </svg>

      <label
        htmlFor="default-checkbox"
        className={`ml-4 text-md ${checked ? 'font-semibold text-brand' : 'text-gray-80'}`} // 
      >
        Show details
      </label>
    </div>
  );
}
