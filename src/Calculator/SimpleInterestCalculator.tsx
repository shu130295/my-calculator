import React, { useEffect, useState } from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import '../App.css';


export let simpleInterestCalculatorIsSelected: boolean;
export let setSimpleInterestCalculatorIsSelected: any;

export const SimpleInterestCalculator = () => {
  [simpleInterestCalculatorIsSelected, setSimpleInterestCalculatorIsSelected] = useState(false);
  const [P, setP] = useState(100000);
  const [R, setR] = useState(6);
  const [T, setT] = useState(10);
  const [I, setI] = useState(P * R * T / 100);
  const [A, setA] = useState(P + I);
  const Calculate = () => {
    let i = P*R*T/100;
    setI(i);
    setA(P + i);
  };
  if (!simpleInterestCalculatorIsSelected) {
    return <></>;
  }

  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Append>
          <InputGroup.Text id="si_principal">Principal</InputGroup.Text>
        </InputGroup.Append>
        <FormControl
          placeholder="principal"
          aria-label="principal"
          aria-describedby="si_principal"
          type='number'
          value={P}
          onChange={(event) => {setP(Number(event.target.value))}}
        />
        <InputGroup.Append>
          <InputGroup.Text id="si_rs">Rs</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Append>
          <InputGroup.Text id="si_rate">Rate</InputGroup.Text>
        </InputGroup.Append>
        <FormControl
          placeholder="rate of interest"
          aria-label="rate of interest"
          aria-describedby="si_roi"
          type='number'
          value={R}
          onChange={(event) => {setR(Number(event.target.value))}}
        />
        <InputGroup.Append>
          <InputGroup.Text id="si_roi">%</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Append>
          <InputGroup.Text id="si_time">Time</InputGroup.Text>
        </InputGroup.Append>
        <FormControl
          placeholder="number of years"
          aria-label="number of years"
          aria-describedby="si_years"
          type='number'
          value={T}
          onChange={(event) => {setT(Number(event.target.value))}}
        />
        <InputGroup.Append>
          <InputGroup.Text id="si_years">years</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
      <Button variant="primary" onClick={() => {Calculate()}}>
        Calculate
      </Button>
      <hr style={{ height: '10' }} />
      <h4>Interest is: {I}</h4>
      <h4>Amount is: {A}</h4>
    </div>
  );
  
}