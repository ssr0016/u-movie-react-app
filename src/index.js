import React from "react";
import ReactDOM from "react-dom/client";
import AppClass from "./AppClass";
// import HelloWorld from "./Helloworld";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <div className="row">
        <div className="col">
          {/* <HelloWorld msg="Hello, again!" /> */}
          <AppClass msg="State using classes" />
        </div>
      </div>
    </div>
  </React.StrictMode>
);
