import React from 'react'
import request from 'superagent'

require('./listing.styl')

class Listing extends React.Component {

    constructor(props) {
        super(props)
        this.state = { listing: null }
    }

    componentDidMount() {
        request.get('http://localhost:3000/listings/'+this.props.params.listingId)
            .end(function(err, res) {
                this.setState({listing: res.body})
            }.bind(this))

    }

    render() {
        // @todo Clean this up
        var title = this.state.listing ? this.state.listing.title : '...'
        var desc = this.state.listing ? this.state.listing.longDescription : '...'
        var image = this.state.listing ?
            <CoverImage url={this.state.listing.mediaFiles[0].url}/> :
            '...'
        return (
            <div>
                <h1>{title}</h1>
                {image}
                <p>{desc}</p>
            </div>
        )
    }
}

class CoverImage extends React.Component {
    render() {
        return (
            <img className="coverImage" src={this.props.url} />
        )
    }
}
export default Listing
