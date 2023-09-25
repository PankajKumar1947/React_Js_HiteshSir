import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,
    
    className = "",
}) {
   
    const amountInputId=useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex 
        ${className}`}>
            {/* In above line we are injecting css by user input */}
            <div className="w-1/2">
                {/* From or to */}
                <label  
                htmlFor={amountInputId}
                className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                {/* Number */}
                <input  
                id={amountInputId}                 
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                {/* Currency Type */}
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={()=>onCurrencyChange && onCurrencyChange(e.target.value)} 
                    disabled={currencyDisable}     
                >
                        {currencyOption.map((currency)=>(
                            <option key={currency}
                             value={currency}>
                            {currency}
                           </option>   
                        ))}           
                </select>
            </div>
        </div>
    );
}

export default InputBox;