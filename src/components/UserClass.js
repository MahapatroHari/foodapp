import React from "react";
import Shimmer from "./Shimmer";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const rawData = await fetch("https://api.github.com/users/mahapatrohari");
    const data = await rawData.json();
    console.log(data);

    this.setState({
      userInfo: data,
    });
  }

  render() {

    //          Tried to get a shimmer while loading but the fetch was too fast that even shimmer was not visible hehe
    
    if (Object.keys(this.state.userInfo).length === 0) {
      console.log("yesss it was actually empty    ");
      console.log(Object.keys(this.state.userInfo).length);
      return <Shimmer />
    }


    return (
      <div>
        <h1>My Details</h1>
        <h2>{this.state.userInfo.name}</h2>
        <h2>Following = {this.state.userInfo.following}</h2>
        <h2>Followers = {this.state.userInfo.followers}</h2>
        <img
          className="ghPP"
          src={this.state.userInfo.avatar_url}
          alt="Oops"
        ></img>
      </div>
    );
  }
}

export default UserClass;
