// import React from "react";
// import ReactLoading from "react-loading";
// import { Link } from "react-router-dom";
// export default function Loading() {
//   function refreshPage() {
//     setTimeout(()=>{
//         window.location.reload(false);
//     }, 3000);
//     console.log('page to reload')
// }
// return (
// 	<div>
// 	<h2>Loading in ReactJs - GeeksforGeeks</h2>
// 	<ReactLoading type="balls" color="#0000FF"
// 		height={100} width={50} />
// 	<ReactLoading type="bars" color="#0000FF"
// 		height={100} width={50} />
// 	<ReactLoading type="bubbles" color="#0000FF"
// 		height={100} width={50} />
// 	<ReactLoading type="cubes" color="#0000FF"
// 		height={100} width={50} />
// 	<ReactLoading type="cylon" color="#0000FF"
// 		height={100} width={50} />
// 	<ReactLoading type="spin" color="#0000FF"
// 		height={100} width={50} />
// 	<ReactLoading type="spokes" color="#0000FF"
// 		height={100} width={50} />
// 	<ReactLoading
// 		type="spinningBubbles"
// 		color="#0000FF"
// 		height={100}
// 		width={50}
// 	/>

// <Link variant="secondary" size="sm"  onClick={refreshPage}>Home</Link>
// 	</div>
// );
// }
import React, { Component } from "react";
import ReactJsAlert from "reactjs-alert";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "success",
      status: true,
      title: "Create success",
    };
  }

  render() {
    return (
      <div className="App">
   
        <ReactJsAlert
            status={this.state.status} // true or false
            type={this.state.type} // success, warning, error, info
            title={this.state.title}
            Close={() => this.setState({ status: false })}
          />
      
       
      </div>
    );
  }
}
