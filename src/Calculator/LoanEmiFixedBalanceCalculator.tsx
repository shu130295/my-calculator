import { useState } from "react";

export let loanEmiFixedBalanceCalculatorIsSelected: boolean;
export let setLoanEmiFixedBalanceCalculatorIsSelected: any;

export const LoanEmiFixedBalanceCalculator = () => {
  [loanEmiFixedBalanceCalculatorIsSelected, setLoanEmiFixedBalanceCalculatorIsSelected] = useState(false);
  if(!loanEmiFixedBalanceCalculatorIsSelected) {
    return <></>;
  }
  return <div>This is LoanEmiFixedBalanceCalculator!</div>
}