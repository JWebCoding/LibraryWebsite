import React from "react";
import './MainPane';
import './BookViewPane';
import './SignInPane';
import Button from "../Button/Button";

// This pane is a testing ground for various ideas.

const Pane =(props)=>{

    const printBooks=event=>{
        event.preventDefault();
        console.log("Pane TEST");
    };
    return(
        <div id="Pane">
            <h1>Greetings {props.name}!</h1>
            <p>{props.text}</p>
            <form onSubmit={printBooks}>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}

// class Pane extends React.Component{
//     printBooks=event=>{
//         event.preventDefault();
//         console.log("Pane TEST");
//     };

//     render(){
//         return(
//         <div id="Pane">
//             {/* <h1>Greetings {props.name}!</h1>
//             <p>{props.text}</p> */}
//             <Button onClick={this.printBooks}> TEST</Button>
            
//             <form onSubmit={this.printBooks}>
//                 <Button type="submit">Submit</Button>
//             </form>
//         </div>
//         )
//     }
// }

// class Pane extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }


export default Pane;