import React, { Component } from "react"
import NumSearchPage from "./components/NumSearchPage"
// import About from "./components/About"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      // <Router>
      // <Switch>
      <>
        <NumSearchPage />
        {/* <Route path='/About' component={About} /> */}
      </>
      // </Switch>
      // </Router>
    )
  }
}

export default App
