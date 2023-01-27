import logo from './logo.svg';
import './App.css';
import {Nav} from "./components/nav/Nav";
import styled from 'styled-components';
import {Header} from "./components/header/Header";
import {About} from "./components/about/About";
import {Partners} from "./components/partners/Partners";
import {Resume} from "./components/resume/Resume";
import {Services} from "./components/services/Services";
import {Projects} from "./components/projects/Projects";
import {Counter} from "./components/counter/Counter";
import {Freelancing} from "./components/freelancing/Freelancing";
import {Contact} from "./components/contact/Contact";
import {Footer} from "./components/footer/Footer";

// import {createGlobalStyle} from 'styled-components';
//
// const GlobalStyle = createGlobalStyle`
// `

function App() {
    return (
        // <GlobalStyle>
        <div className="App">
            <Nav/>

            <Header/>

            <About/>

            {/*<Partners/>*/}

            <Resume/>

            <Services/>

            <Projects/>

            <Counter/>

            <Freelancing/>

            <Contact/>

            <Footer/>

        </div>
        // </GlobalStyle>
    );
}

export default App;
