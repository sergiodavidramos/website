import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/styles/App.css";
import Layout from "../containers/Layout";
import Home from "../containers/Home";
import About from "../containers/About";
import Work from "../containers/Work";
import Studies from "../containers/Studies";
import NotFound from "../containers/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/studies" component={Studies} />
          <Route path="/work" component={Work} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
