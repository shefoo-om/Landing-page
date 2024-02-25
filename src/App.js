import React from "react";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";
import Services from "./components/Services";
import Plans from "./components/Plans";
import Team from "./components/Team";
import Stats from "./components/Stats";
import Whyus from "./components/Whyus";
import Contactus from "./components/Contactus";


function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Services />
      <Plans />
      <Team />
      <Stats />
      <Whyus />
      <Contactus />
    </div>
  );
}

export default App;
