import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import SwipeableRoutes from "react-swipeable-routes";
import Bgvideo from './video/fire.mp4'
import {Container} from 'react-bootstrap'
import Header from './components/Header';
import Home from './components/Home';
import MenuContainer from './components/MenuContainer';
import MenuContainer2 from './components/MenuContainer2';
import MenuContainer3 from './components/MenuContainer3';
import MenuContainer4 from './components/MenuContainer4';
import MenuContainer5 from './components/MenuContainer5';
import kontakt from './components/Kontakt';
import Footer from './components/Footer';

function App()  {
  const pages = ["home", "menu", "menu/1", "menu/2", "menu/3", "menu/4", "kontakt"]
  const [previousPage, setPreviousPage] = useState({showing: false, pageNum: -1});
  const [nextPage, setNextPage] = useState({showing: true, pageNum: 1});

  const checkPreviousPage = (index) => {
    if (index !== -1){
      return setPreviousPage({showing: true, pageNum: index})
    }else{
      return setPreviousPage({showing: false, pageNum: -1})
    }}
    const checkNextPage = (index) => {
      if (index !== 7){
        return setNextPage({showing: true, pageNum: index})
      }else{
        return setNextPage({showing: false, pageNum: 7})
      }}
    return (
      <>
        <video autoPlay="autoplay" loop="loop" muted className="background-video">
          <source src={Bgvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Router>
          <Header />
          <Container fluid="lg" className="text-white">
            {previousPage.showing ? 
          <div className="previousPage">
                <Link to={"/" + pages[previousPage.pageNum]}>
                    <FontAwesomeIcon icon={faArrowCircleLeft} />
                </Link>
            </div>: null}
            {nextPage.showing ? 
            <div className="nextPage">
                <Link to={"/" + pages[nextPage.pageNum]}>
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                </Link>
            </div>: null}
            <SwipeableRoutes replace 
            onChangeIndex={(index) => {
              window.scrollTo(0, 0);
              checkPreviousPage(index-1)
              checkNextPage(index+1)
              }}
            >
              <Route path="/home" component={Home} />
              <Route path="/menu" component={MenuContainer} />
              <Route path="/menu/1" component={MenuContainer2} />
              <Route path="/menu/2" component={MenuContainer3} />
              <Route path="/menu/3" component={MenuContainer4} />
              <Route path="/menu/4" component={MenuContainer5} />
              <Route path="/kontakt" component={kontakt} />
            </SwipeableRoutes>
            <Footer />
          </Container>
          </Router>
      </>
    );
}

export default App;