import React, {Component} from 'react';
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import Wrapper from "./components/wrapper";
import Quote from "./components/quotes";
import CategoryList from "./components/categoryList";
import './App.css';
import "bulma/css/bulma.css";

function App() {
    return(
    <div className="App">
      <Router>
        <Wrapper>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact>
          <CategoryList/>
        </Route>
        <Route path="/category/:category_name" component={Quote}>
        </Route>
        </Wrapper>
      </Router>
    </div>
  );
}


export default App;
