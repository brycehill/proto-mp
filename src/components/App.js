import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/search'>Search</Link>
                    <Link to='/about'>About</Link>
                </nav>
                {this.props.children}
            </div>

        )
    }
})
