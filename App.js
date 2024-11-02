import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>Hello World From Span Element</span>;

/*
JSX is not HTML in JS but it has HTML-like syntax.
Both heading and jsxHeading are ReactElements which, at the end of the day, are JavaScript objects.
JSX is not valid and pure JavaScript.
Browsers do not understand JSX; Babel converts/transpiles it to React code.
In the background, Babel uses React.createElement.
*/
// React Element
const heading = (
  <h1 className="head" tabIndex={5}>
    {elem}
    Hello World From React Element
  </h1>
);

// React Element Converted to Component
const Title = () => (
  <h1 className="head" tabIndex={5}>
    Hello World From Jsx
  </h1>
);

const number = 1000;

/*
All the 3 implementation of title have the same meaning
We can put element inside a component, a component inside a element and mix and match according to our needs 
*/
// React Functional Component
const HeaderComponent = () => (
  <div id="container">
    <Title></Title>
    <Title />
    {Title()}
    {heading}
    <h1 className="heading">Hello World From Functional Component</h1>;
  </div>
);

// Using Arrow Function
// const HeaderComponent = () => <h1>Hello World From Functional Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxHeading);
root.render(<HeaderComponent />);
