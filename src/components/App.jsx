import React from "react";
import Navigation from "./Navigation";
import Crousel from "./Crousel";
import Main_Box from "./Main_Box";


//bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   
return (
    <div>
    <Navigation />
     <Crousel />
     <Main_Box />
    </div>
  );
}

export default App;