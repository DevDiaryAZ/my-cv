import logo from './logo.svg';
import './App.css';
import {Nav} from "./components/nav/Nav";
import styled from 'styled-components';
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";

// import {createGlobalStyle} from 'styled-components';
//
// const GlobalStyle = createGlobalStyle`
// `

function App() {
    return (
        // <GlobalStyle>
            <div className="App">
                {/* Navigation */}
                <Nav/>

                {/* Header */}
                <Header/>

                {/* About */}
                <About/>


            </div>
        // </GlobalStyle>
    );
}

export default App;
