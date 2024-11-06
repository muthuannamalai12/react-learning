import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + "Child Constructor Called");

    // this.state = {
    //   count: 0,
    //   count2: 1,
    // };

    this.state = {
      userInfo: {
        name: "dummy name",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/muthuannamalai12");

    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    // console.log(this.props.name + "Child Component Mount Called");
  }

  // to mimick useState with one dependency
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count != prevState.count) {
      //
    }
  }

  // to mimick two use effect
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count != prevState.count) {
      //
    }
    if (this.state.count2 != prevState.count) {
      //
    }
  }

  // to mimick 2 depedencies in the useEffectdependency
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.count != prevState.count ||
      this.state.count2 != prevState.count
    ) {
      //
    }
  }

  render() {
    // console.log(this.props.name + "Child Render Called");
    // const { name, location } = this.props;
    // const { count } = this.state;
    // Destructing the props
    const { name, avatar_url, location } = this.state.userInfo;
    return (
      <div className="user-container">
        {/* <h1>Name : {this.props.name}</h1>
        <h2>Location : {this.props.location}</h2> */}
        {/* <h1>Count : {this.state.count}</h1>
        <h1>Count2: {this.state.count2}</h1> */}
        {/* <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button> */}
        {/* <img src={this.state.userInfo.avatar_url}></img>
        <h1>Name : {this.state.userInfo.name}</h1>
        <h2>Location : {this.state.userInfo.location}</h2> */}
        <img src={avatar_url}></img>
        <h1>Name : {name}</h1>
        <h2>Location : {location}</h2>
      </div>
    );
  }
}

export default UserClass;
