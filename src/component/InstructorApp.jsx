import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {Route, HashRouter, Switch } from "react-router-dom";

import CourseComponent from './CourseComponent';

class InstructorApp extends Component {
    render() {
        return (
            <HashRouter>
                <>
                    <h1>JavaRush Instructor Application</h1>
                    <Switch>
                        <Route path="/" exact component={ListCoursesComponent} />
                        <Route path="/courses" exact component={ListCoursesComponent} />
                        <Route path="/courses/:id" component={CourseComponent} />
                    </Switch>
                </>
            </HashRouter>
        )
    }
}

export default InstructorApp