import { useState } from "react";

export let compoundInterestCalculatorIsSelected: boolean;
export let setCompoundInterestCalculatorIsSelected: any;

export const CompoundInterestCalculator = () => {
  [compoundInterestCalculatorIsSelected, setCompoundInterestCalculatorIsSelected] = useState(false);
  if(!compoundInterestCalculatorIsSelected) {
    return <></>;
  }
  return <div>This is CompoundInterestCalculator!</div>
}