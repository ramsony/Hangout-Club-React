import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import EventForm from "../../features/event/EventForm/EventForm";
import SettingsDashboard from "../../features/event/user/Settings/SettingsDashboard";
import UserDetailedPage from "../../features/event/user/UserDetailed/UserDetailedPage";
import PeopleDashboard from "../../features/event/user/PeopleDashboard/PeopleDashboard";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import HomePage from "../../features/event/home/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/events" component={EventDashboard} />
                  <Route path="/events/:id" component={EventDetailedPage} />
                  <Route path="/people" component={PeopleDashboard} />
                  <Route path="/profile/:id" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                  <Route path="/creatEvent" component={EventForm} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
