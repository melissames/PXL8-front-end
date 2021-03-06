import React from 'react';
import { connect }  from 'react-redux';
import { fetchArtworkSearch, fetchAllArtworks } from '../../actions/index.js';
import { bindActionCreators } from 'redux'
import ArtworkData from './ArtworkData.js'
import ArtworkSearch from './ArtworkSearch'
// import NavBar from '../../components/NavBar.js'

class ArtworkContainer extends React.Component {

  handleSubmit = event => {
    event.preventDefault();

    this.props.getArtworkSearch(event.target.name.value)
  }

  render(){
    return (
      <div className="Artwork">
        <br></br><br></br>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='name' placeholder='search artists' className='centered' />
        </form>
        <br></br><br></br>
        {this.props.loading ? (this.props.submitted ? <ArtworkSearch /> : <ArtworkData />) : null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    allArtworks: state.allArtworks,
    artworkData: state.artworkSearch,
    submitted: state.submitted,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getAllArtworks: bindActionCreators(fetchAllArtworks, dispatch),
    getArtworkSearch: bindActionCreators(fetchArtworkSearch, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtworkContainer);
