import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Header from "./components/Header";
import iconSupervisor from "./images/icon-supervisor.svg";
import iconTeamBuilder from "./images/icon-team-builder.svg";
import iconKarma from "./images/icon-karma.svg";
import iconCalculator from "./images/icon-calculator.svg";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      h2: "Supervisor",
      p: "Monitors activity to identify project roadblocks",
      icon: iconSupervisor,
    },
    {
      id: 2,
      h2: "Team Builder",
      p: "Scans our talent network to create the optimal team for your project",
      icon: iconTeamBuilder,
    },
    {
      id: 3,
      h2: "Karma",
      p: "Regularly evaluates our talent to ensure quality",
      icon: iconKarma,
    },
    {
      id: 4,
      h2: "Calculator",
      p: "Uses data from past projects to provide better delivery estimates",
      icon: iconCalculator,
    },
  ]);

  return (
    <React.Fragment>
      <Header />
      <Cards data={data} />
    </React.Fragment>
  );
}

export default App;

/*
 
  Reliable, efficient delivery
  Powered by Technology

  Our Artificial Intelligence powered tools use millions of project data points 
  to ensure that your project is successful

  Supervisor
  Monitors activity to identify project roadblocks

  Team Builder
  Scans our talent network to create the optimal team for your project

  Karma
  Regularly evaluates our talent to ensure quality

  Calculator
  Uses data from past projects to provide better delivery estimates

*/
