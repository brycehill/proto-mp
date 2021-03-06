import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import App from './components/App/App'
import About from './components/About/About'
import Listing from './components/Listing/Listing'
import Search from './components/Search/Search'
import Dashboard from './components/Dashboard/Dashboard'

export default (
    <Router history={createBrowserHistory()}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="about" component={About} />
            <Route path="listing/:listingId" component={Listing} />
            <Route path="search(/:q)" component={Search}/>
        </Route>
    </Router>
)
