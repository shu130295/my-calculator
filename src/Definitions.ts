export interface Calc {
  isSelected: boolean;
  setIsSelected: any;
  name: string;
}

export enum CalcNames {
  Home = 'Home',
  SimpleInterestCalculator = 'Simple Interest',
  CompoundInterestCalculator = 'Compound Interest',
  LoanEmiFixedBalanceCalculator = 'Loan EMI Fixed Balance',
  LoanEmiReducingBalanceCalculator = 'Loan EMI Reducing Balance'
}