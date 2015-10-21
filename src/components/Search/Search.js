import React from 'react'
import request from 'superagent'

class Search extends React.Component {
    // Don't like this, but...
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }

    componentDidMount() {
        request.get('http://localhost:3000/listings')
            .end(function(err, res) {
                this.setState({data: res.body})
            }.bind(this))
    }

    render() {
        return (
            <div>
                <h1>Listings</h1>
                <ListingTileList data={this.state.data} />
            </div>
        )
    }
}

class ListingTileList extends React.Component {
    render() {
        var listingTiles = this.props.data.map(function(listing) {
            return <ListingTile listing={listing} />
        })
        return (
            <ul className="listingTiles">
              {listingTiles}
            </ul>
        )
    }
}

class ListingTile extends React.Component {
    render() {
        return (
            <li>{this.props.listing.title}</li>
        )
    }
}

export default Search
