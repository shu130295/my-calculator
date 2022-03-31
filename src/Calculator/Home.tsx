import { useState } from "react";

export let homeIsSelected: boolean;
export let setHomeIsSelected: any;

export const Home = () => {
  [homeIsSelected, setHomeIsSelected] = useState(true);
  if(!homeIsSelected) {
    return <></>;
  }
  return <div>
    <h3>This is a calculator app for all your Finance needs. 
    Click on any calculator from the navigation bar on the left!</h3>
    </div>
}