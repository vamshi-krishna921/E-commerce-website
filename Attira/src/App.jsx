import React from "react";
import Navbar from "./Navbar";
import Routing from "./Routing";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-13">
        <Routing />
      </div>
    </>
  );
}

export default App;
