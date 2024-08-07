import React from "react";
import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
import Items from "./components/Items";
import Companies from "./components/Companies";
function App() {
  return (
    <>
      <Contacts />
      <div className="pt-6 bg-[url('src/assets/backgrounds/background.png')] bg-cover bg-no-repeat w-full h-full  ">
        <Header />
        <Hero />
      </div>
      <Filter />
      <Items />
      <Companies />
    </>
  );
}

export default App;
