import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route exact path="/">
            <MainContent />
          </Route>
          <Route path="/blogs">
            <Blog />
          </Route>

          <Route path="*">
            <h1>not found</h1>
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
