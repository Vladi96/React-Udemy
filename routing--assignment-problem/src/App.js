import React, { Component } from "react";

import Courses from "./containers/Courses/Courses";
import Users from "./containers/Users/Users";
import Course from "./containers/Course/Course";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    const style = { color: "red" };
    return (
      <div className="App">
        {/* <Users />
        <Courses /> */}
        <ul>
          <li>
            <a href="/User">User</a>
          </li>
          <li>
            <a href="/Courses">Courses</a>
          </li>
        </ul>

        <Switch>
          <Route path="/User" exact component={Users} />
          <Route path={"/Courses/:id"} exact component={Course} />
          <Route path="/Courses" exact component={Courses} />
          <Redirect to="/404" component={() => <h1>Not Found!</h1>} />
        </Switch>

        <ol style={{ textAlign: "left" }}>
          <li style={style}>
            Add Routes to load "Users" and "Courses" on different pages (by
            entering a URL, without Links)
          </li>
          <li style={style}>
            Add a simple navigation with two links => One leading to "Users",
            one leading to "Courses"
          </li>
          <li style={style}>
            Make the courses in "Courses" clickable by adding a link and load
            the "Course" component in the place of "Courses" (without passing
            any data for now)
          </li>
          <li style={style}>
            Pass the course ID to the "Course" page and output it there
          </li>
          <li style={style}>
            Pass the course title to the "Course" page - pass it as a param or
            score bonus points by passing it as query params (you need to
            manually parse them though!)
          </li>
          <li style={style}>
            Load the "Course" component as a nested component of "Courses"
          </li>
          <li>Add a 404 error page and render it for any unknown routes</li>
          <li>
            Redirect requests to /all-courses to /courses (=> Your "Courses"
            page)
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
