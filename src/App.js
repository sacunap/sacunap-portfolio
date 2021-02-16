import { Container, Grid } from "@material-ui/core";

import Profile from "../src/components/Profile/index";
import Header from "../src/components/Footer/index";
import Portfolio from "../src/pages/Portfolio/index";
import Resume from "../src/pages/Resume/index";
import Footer from "../src/components/Footer/index";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Header />
          <Router>
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Resume />
              </Route>
            </Switch>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
