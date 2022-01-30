import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/about/About';
import PortfolioItem from './components/PortfolioItem/PortfolioItem';
import ContactForm from './components/ContactForm/ContactForm';
import Buttons from './components/Buttons/Buttons';
import Inputs from './components/Inputs/Inputs';
import SmileButton from './components/SmileButton/SmileButton';

import works from './works';

class App extends React.Component {
  state = {
      closed: true
  };

  openForm() {
      this.setState({
          closed: false
      });
  }

  closeForm() {
      this.setState({
          closed: true
      });
  }

  render() {
      return (
          <div className='app'>
              <Header brand='Иван Иванов'></Header>

              <main className='main'>
                  <About title='React-разработчик Иван Иванов'>
                      <p>
                          Разрабатываю на самом крутом в мире фреймворке
                          <br />
                          самые крутые в мире SPA!
                      </p>
                      <p>С удовольствием и вам что-нибудь разработаю </p>
                  </About>

                    <SmileButton/>


                  <Inputs/>
                  
                      <Buttons text = {'Hello'} title = {"button 1"} />
                      <Buttons text = {'Hi!!!!!!!1'} title = {"button 2"} />
                      <Buttons text = {'I am happy button'} title = {"click to order a tasty honey-cake"} />
                  <div className='portfolio'>
                      <div className='container'>
                          {works.map(work => (
                              <PortfolioItem key={work.id} work={work} />
                          ))}
                      </div>
                  </div>

                  <div className='contacts'>
                      <div className='container'>
                          {this.state.closed ? (
                              <button
                                  className='button'
                                  onClick={() => this.openForm()}
                              >
                                  Напишите мне
                              </button>
                          ) : (
                              <div>
                                  <hr />
                                  <ContactForm
                                      onSubmit={() => this.closeForm()}
                                  />
                              </div>
                          )}
                      </div>
                  </div>
              </main>
          </div>
      );
  };
};
export default App;