import React from "react";
import ReactDOM from "react-dom/client";

// const heading=document.createElement("h1")
// heading.innerHTML="Namaste from JavaScript";
// document.getElementById("root").appendChild(heading);

// const heading=React.createElement("h1",{},"Hello world");
// const Heading1=React.createElement("h1",{id:"one"},"Hello1")
// const Heading2=React.createElement("h1",{id:"two"},"Hello2")
// const container=React.createElement("div",{},[Heading1,Heading2])
//
const Title=()=>(
        <h1>Namaste</h1>
)
const Heading = () => {
  return <div>
        <Title/>
        Hello World
        </div>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
