import React from "react";
import Form from "./component/Form";
import Nav from "./component/Nav";

function App() {
  return (
    <>
      <Nav />

      <h1 className="text-black text-center text-3xl font-bold m-10">
        Hook Form
      </h1>
      <Form />
    </>
  );
}

export default App;
