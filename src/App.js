import logo from './logo.svg';
import './App.css';
import React from "react";

const GreetingsSubheading = () => {
    return(
        <p style={{
            fontSize: "1.5em",
            color: "wheat"
        }}>
            This is our first React App!
        </p>
    );
}

class Greetings extends React.Component{
    render() {
       return(
           <p style={{
               fontSize: "2em",
               color: "white"
           }}> Greetings! Welcome to our Site. </p>
       )
    }
}

function App() {

    const SubHeading = () => {
        return(
            <p style={{
                fontSize: "1em",
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "#61dafb"
            }}>
                This is second subheading!
            </p>
        )
    }

    return(
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#2b2626",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Greetings />
            <GreetingsSubheading />
            <SubHeading />
        </div>
    )
}


export default App;