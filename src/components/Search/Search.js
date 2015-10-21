import React from 'react'
import { Link } from 'react-router'
import request from 'superagent'

require('./search.styl')

class Search extends React.Component {
    // Don't like this, but...
    constructor(props) {
        super(props)
        this.state = { data: [] }
    }

    componentDidMount() {
        this.execSearch();
    }

    execSearch() {
        request.get('http://localhost:3000/listings')
            .query({ q: this.props.params.q })
            .end(function(err, res) {
                this.setState({data: res.body})
            }.bind(this))

    }

    componentDidUpdate(prev) {
        var old = prev.params.q
        var newQ = this.props.params.q
        if (old !== newQ) {
            this.execSearch()
        }
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
            <div className="listingTiles">
              {listingTiles}
            </div>
        )
    }
}

class ListingTile extends React.Component {
    render() {
        var listingId = this.props.listing.id
        return (
            <div className="tile">
                <h3 className="listingTitle">
                    <Link to={`/listing/${listingId}`}>
                        {this.props.listing.title}
                    </Link>
                </h3>
                <p>{this.props.listing.shortDescription}</p>
            </div>
        )
    }
}

export default Search
