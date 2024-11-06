import React from "react";
import UserClass from "./UserClass";
import User from "./User";

class About extends React.Component {
  constructor(props) {
    console.log("Parent Constructor Called");
    super(props);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namsate React");
    }, 1000);
    console.log("Parent Component Mount Called");
  }

  componentDidUpdate() {
    console.log("Update Component Mount Called");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    console.log("Parent Render Called");
    return (
      <div>
        <h1>About Us</h1>
        <h2>Learning React from Akshay</h2>
        <User name={"Muthu Annamalai-Function"} location={"Chennai"} />
        {/* <UserClass name={"First"} location={"Chennai"} /> */}
      </div>
    );
  }
}

// Functional About Compoenent
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>Learning React from Akshay</h2>
//       {/* <User name={"Muthu Annamalai-Function"} location={"Chennai"} /> */}
//       <UserClass name={"Muthu Annamalai-Class"} location={"Chennai"} />
//     </div>
//   );
// };

export default About;
