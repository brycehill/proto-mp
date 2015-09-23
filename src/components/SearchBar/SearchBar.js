import React from 'react'

require('./searchbar.styl')

export default React.createClass({
    render() {
        return (
            <span className="searchbar">
                <input type="text" placeholder="Search" />
                <button>Search</button>
            </span>
        )
    }
})
