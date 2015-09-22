import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

require('./App.styl')

export default React.createClass({
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>

        )
    }
})
