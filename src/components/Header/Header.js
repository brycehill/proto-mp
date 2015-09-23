import React from 'react'
import Navigation from '../Navigation/Navigation'
import SearchBar from '../SearchBar/SearchBar'

require('./header.styl')

export default React.createClass({
    render() {
        return (
            <header className="main-header">
                <div className="logo">
                    <img src="./src/icons/lorem_logo.png"/>
                </div>
                <SearchBar />
                <Navigation />
            </header>
        )
    }
})
