import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";
import "./app.css";
import { Grid } from "@material-ui/core";
import Header from "./components/static/header";
import Router from './components/router/router';
import Notification from './components/notification/notification'


class App extends Component {
  componentDidMount() {
    this.props.store.fetchRooms();
  }
  render() {
    return (
      <div className="App">
        <Notification />
        <Header roomName={this.props.store.roomName} userName={this.props.store.userName} />
        <div style={{ textAlign: "center" }}>
          <Grid container>
           <Router />
          </Grid>
        </div>
      </div>
    );
  }
}

export default inject("store")(withRouter(observer(App)));

// export default App;
