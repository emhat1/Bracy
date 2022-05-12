import React from "react";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>I'm sorry, that page can't be found</h1>
        <img src="../img/SadKitten.png" alt="A sad Persian kitten"
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
