import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './components/App/App'
import About from './components/About'
import Search from './components/Search'
import Dashboard from './components/Dashboard'

export default (
    <Router>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="about" component={About} />
            <Route path="search" component={Search}/>
        </Route>
    </Router>
)
