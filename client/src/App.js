import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={'https://ci6.googleusercontent.com/proxy/pPyzjMxFAl7wxsJE9FGDIRIkNqJryUY8OtJfbaWqXWr4PfW_4O-ql0uh0AkgwSv5ffb0zz3WBDrDXFIFElp1wdYSWyEeMtLY_ZxKTICrmPJPUVn7xzlqAb1xXF4N833iFpjYIfSAQmYBTudAQkMYdEoYnufnomxdpSiQ45lu7RpCiJWmXysQ60LFTmFOb3dpGQ=s0-d-e1-ft#https://ring.widen.net/content/w8ezn64p20/png/GPCS-509_Price_Protection_Hero.png?position=c&color=ffffffff&quality=80&u=vuzezy'} className="App-logo" alt="logo" />
                    <h1 className="App-title">Five Points Security Systems</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;
