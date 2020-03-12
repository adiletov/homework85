import React, {Component} from 'react';
import {connect} from "react-redux";
import {orderAlbumName, orderTracks} from "../../Store/Actions/actionTracks";


class Tracks extends Component {
  async componentDidMount() {
        const id = this.props.match.params.id;
        await this.props.orderAlbumName(id);
        this.props.orderTracks(id)
    }
    render() {
        return (
            <div>
                <h3>{this.props.album.title}</h3>

                {this.props.tracks && this.props.tracks.map(obj=>
                    <div key={obj._id}><p>
                     <small style={{marginRight: '10px'}}>{obj.number}.</small>
                        {obj.title}
                    <small style={{background: 'lightblue', padding: '3px', borderRadius: '10px'}}>{obj.duration}</small></p>
                    </div>
                )}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    tracks: state.tracks.tracks,
    album: state.tracks.album
});

const mapDispatchToProps = dispatch =>({
    orderTracks: (id)=> dispatch(orderTracks(id)),
    orderAlbumName: (id) => dispatch(orderAlbumName(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);