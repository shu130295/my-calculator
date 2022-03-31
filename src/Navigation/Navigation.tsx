import React from "react";
import { setCompoundInterestCalculatorIsSelected } from "../Calculator/CompoundInterestCalculator";
import { setHomeIsSelected } from "../Calculator/Home";
import { setLoanEmiFixedBalanceCalculatorIsSelected } from "../Calculator/LoanEmiFixedBalanceCalculator";
import { setLoanEmiReducingBalanceCalculatorIsSelected } from "../Calculator/LoanEmiReducingBalanceCalculator";
import { setSimpleInterestCalculatorIsSelected } from "../Calculator/SimpleInterestCalculator";
import { CalcNames } from "../Definitions";


export const Navigation = () => {
  return (
    <div className='Navigation'>
      <div className='ButtonContainer'><Button1 name={CalcNames.Home} /></div>
      <div className='ButtonContainer'><Button1 name={CalcNames.SimpleInterestCalculator} /></div>
      <div className='ButtonContainer'><Button1 name={CalcNames.CompoundInterestCalculator} /></div>
      <div className='ButtonContainer'><Button1 name={CalcNames.LoanEmiFixedBalanceCalculator} /></div>
      <div className='ButtonContainer'><Button1 name={CalcNames.LoanEmiReducingBalanceCalculator} /></div>

    </div>);
};

const Button1 = (props: any) => {
  return <div className='Button' onClick={() => buttonHasBeenClicked(props.name)}>{props.name}</div>
}

const buttonHasBeenClicked = (buttonName: string) => {
  setAllButtonsAsNotSelected();
  setClickedButtonAsSelected(buttonName);
}

const setAllButtonsAsNotSelected = () => {
  setHomeIsSelected(false);
  setSimpleInterestCalculatorIsSelected(false);
  setCompoundInterestCalculatorIsSelected(false);
  setLoanEmiFixedBalanceCalculatorIsSelected(false);
  setLoanEmiReducingBalanceCalculatorIsSelected(false);
};

const setClickedButtonAsSelected = (buttonName: string) => {
  switch(buttonName) {
    case CalcNames.Home: setHomeIsSelected(true); break;
    case CalcNames.SimpleInterestCalculator: setSimpleInterestCalculatorIsSelected(true); break;
    case CalcNames.CompoundInterestCalculator: setCompoundInterestCalculatorIsSelected(true); break;
    case CalcNames.LoanEmiFixedBalanceCalculator: setLoanEmiFixedBalanceCalculatorIsSelected(true); break;
    case CalcNames.LoanEmiReducingBalanceCalculator: setLoanEmiReducingBalanceCalculatorIsSelected(true); break;
  }
}
