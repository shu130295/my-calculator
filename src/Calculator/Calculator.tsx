import { CompoundInterestCalculator } from "./CompoundInterestCalculator";
import { LoanEmiFixedBalanceCalculator } from "./LoanEmiFixedBalanceCalculator";
import { SimpleInterestCalculator } from "./SimpleInterestCalculator";
import { Home } from "./Home";
import {LoanEmiReducingBalanceCalculator} from "./LoanEmiReducingBalanceCalculator";

export const Calculator = () => {
  return (<div className='Calculator'>
    <Home />
    <SimpleInterestCalculator />
    <CompoundInterestCalculator />
    <LoanEmiFixedBalanceCalculator />
    <LoanEmiReducingBalanceCalculator />
  </div>);
};