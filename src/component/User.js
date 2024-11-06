import { useState, useEffect } from "react";
const User = (props) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Namsate React");
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const [count] = useState(0);
  const [count2] = useState(1);
  // Destrucuting on the fly
  // const User = ({ name, location }) => {
  const { name, location } = props;
  return (
    <div className="user-container">
      {/* <h1>Name : {props.name}</h1>
      <h2>Location : {props.location}</h2> */}
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
      <h1>Name : {name}</h1>
      <h2>Location : {location}</h2>
      <h3>Contact : @muthuannamalai_</h3>
    </div>
  );
};

export default User;
