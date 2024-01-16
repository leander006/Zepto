import React, { useState } from "react";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const App: React.FC = ()=> {
  

  return (
<div className="flex flex-col min-h-screen">
  <Navbar/>
  <Search/>
  <Footer />
</div>

  );
}

export default App;




