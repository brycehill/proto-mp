import React from 'react'
import { Link } from 'react-router'

require('./header.styl')

export default React.createClass({
    render() {
        return (
            <header>
                <Link to='/'>Home</Link>
                <Link to='/search'>Search</Link>
                <Link to='/about'>About</Link>
            </header>
        )
    }
})
