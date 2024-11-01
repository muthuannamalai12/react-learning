// Creates a h1 tag and prints Hello World From React
// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World From React!!");

/* Structure
<div id="parent">
  <div id="child">
    <h1>I'm h1 tag</h1>
  </div>
</div>
*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I'm h1 tag")
  )
);

/* Structure
<div id="parent">
  <div id="child">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div>
*/

<div id="parent">
  <div id="child1">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div>;

/*Structure
<div id="parent">
  <div id="child1">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
  <div id="child2">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div>
*/

const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ])
);

// Structure
// <div id="parent">
//   <div id - "child1">
//     <h1>I'm h1 tag</h1>
//     <h2>I'm h2 tag</h1>
//   </div>
//   <div id - "child2">
//     <h1>I'm h1 tag</h1>
//     <h2>I'm h2 tag</h1>
//   </div>
//<div>

const parent2 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// Used to render the parent structure
// root.render(parent);
// Used to render the parent 1 structure
// root.render(parent1);
// Used to render the parent 2 structure
root.render(parent2);
