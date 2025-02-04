//import React from 'react'
import { useId } from "react"
import PropTypes from 'prop-types'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {

  const amountInputId = useId();

  const currencySelectOptions = currencyOptions.map((currencyCode) => ({
    value: currencyCode,
    label: currencyCode,  // You can also map to a more descriptive label if needed
  }));


  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
              <label htmlFor={amountInputId}  className="inline-block mb-2 text-black/40">
                  {label}
              </label>
              <input
                  id={amountInputId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  /*placeholder="Amount"*/
                  placeholder={amount ? '' : "Amount"}//conditionally hide the placeholder if amount is set
                  disabled={amountDisable}
                  value={amount}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              />
          </div>
          <div className="flex flex-wrap justify-end w-1/2 text-right">
              <p className="w-full mb-2 text-black/40">Currency Type</p>
              <select
                  className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
                  value={selectCurrency.value}
                  onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
                  disabled={currencyDisable}
                  
              >
                  
                  {currencySelectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
                    </option> ))}
              
              </select>
          </div>
      </div>
  );
}


//Prop Types validation
InputBox.propTypes = {
  label: PropTypes.string.isRequired,  // Ensure label is a string and required
  amount: PropTypes.number.isRequired,            // Ensure amount is a number
  onAmountChange: PropTypes.func,      // Ensure onAmountChange is a function
  onCurrencyChange: PropTypes.func,    // Ensure onCurrencyChange is a function
  currencyOptions: PropTypes.array,    // Ensure currencyOptions is an array
  selectCurrency: PropTypes.string,    // Ensure selectCurrency is an object
  amountDisable: PropTypes.bool,       // Ensure amountDisable is a boolean
  currencyDisable: PropTypes.bool,     // Ensure currencyDisable is a boolean
  className: PropTypes.string,         // Ensure className is a string
};


export default InputBox;
