import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
// import About from "./components/about/About";
// import PortfolioItem from "./components/PortfolioItem/PortfolioItem";
// import ContactForm from "./components/ContactForm/ContactForm";
// import Buttons from "./components/Buttons/Buttons";
// import Inputs from "./components/Inputs/Inputs";
// import SmileButton from "./components/SmileButton/SmileButton";

import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/home";
import ProjectPage from "./pages/project";

// import works from "./works";

export default class App extends React.Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       closed: true,
  //     };
  //   }

  //   openForm() {
  //     this.setState({
  //       closed: false,
  //     });
  //   }

  //   closeForm() {
  //     this.setState({
  //       closed: true,
  //     });
  //   }

  render() {
    return (
      <div className="app">
        <Header brand="Любава Канивец"></Header>

        <main className="main">
          {/* <About title="React-разработчик Любава Канивец">
            <p>
              Разрабатываю на самом крутом в мире фреймворке
              <br />
              самые крутые в мире SPA!
            </p>
            <p>С удовольствием и вам что-нибудь разработаю </p>
          </About> */}

          <Routes>
            <Route path="/project/:id" component={ProjectPage} />
            <Route exact path="/" component={HomePage} />
          </Routes>
          {/* <Navigate to="/" /> */}

          {/* <SmileButton /> */}

          {/* <Inputs /> */}

          {/* <Buttons text={"Hello"} title={"button 1"} />
          <Buttons text={"Hi!!!!!!!1"} title={"button 2"} />
          <Buttons
            text={"I am happy button"}
            title={"click to order a tasty honey-cake"}
          /> */}

          {/* <div className="portfolio">
            <div className="container">
              {works.map((work) => (
                <PortfolioItem key={work.id} work={work} />
              ))}
            </div>
          </div> */}

          {/* <div className="contacts">
            <div className="container">
              {this.state.closed ? (
                <button className="button" onClick={() => this.openForm()}>
                  Напишите мне
                </button>
              ) : (
                <div>
                  <hr />
                  <ContactForm onSubmit={() => this.closeForm()} />
                </div>
              )}
            </div>
          </div> */}
        </main>
      </div>
    );
  }
}
