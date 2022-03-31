import { useState } from "react";

export let loanEmiReducingBalanceCalculatorIsSelected: boolean;
export let setLoanEmiReducingBalanceCalculatorIsSelected: any;

export const LoanEmiReducingBalanceCalculator = () => {
  [loanEmiReducingBalanceCalculatorIsSelected, setLoanEmiReducingBalanceCalculatorIsSelected] = useState(false);
  if(!loanEmiReducingBalanceCalculatorIsSelected) {
    return <></>;
  }
  return <div>This is LoanEmiReducingBalanceCalculator!</div>
}