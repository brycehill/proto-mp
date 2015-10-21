import React from 'react'
import { Link } from 'react-router'

require('./searchbar.styl')

export default React.createClass({
    getInitialState() {
        return { q: '' }
    },

    render() {
        return (
            <span className="searchbar">
                <input type="text" placeholder="Search" value={this.state.q} onChange={this.updateQ} />
                <Link to={`/search/${this.state.q}`}>
                    <button>Search</button>
                </Link>
            </span>
        )
    },

    updateQ(e) {
        this.setState({ q: e.target.value })
    }

})
