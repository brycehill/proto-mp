import React from 'react'
import { Link } from 'react-router'

require('./navigation.styl')

export default React.createClass({
    render() {
        return (
            <nav>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/search'>Search</Link>
                <Link className='nav-link' to='/about'>About</Link>
            </nav>
        )
    }
})
