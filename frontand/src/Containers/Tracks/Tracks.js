import React, {Component} from 'react';
import {connect} from "react-redux";
import {orderAlbumName, orderTracks} from "../../Store/Actions/actionTracks";
import {orderPlayMusik} from "../../Store/Actions/actionTrackHistory";
import {Modal} from "reactstrap";


class Tracks extends Component {
    state = {
        isOpen: false,
        href: ''
    };

    async componentDidMount() {
        const id = this.props.match.params.id;
        await this.props.orderAlbumName(id);
        this.props.orderTracks(id)
    }

    playMusik = (id) => {
        this.props.user && this.props.orderPlayMusik(id)
    };
    playVideo = (href, bool) => {
        this.setState({isOpen: bool, href: href});
    };

    render() {
        return (
            <div>
                <h3>{this.props.album.title}</h3>

                {this.props.tracks && this.props.tracks.map(obj =>
                    <div key={obj._id} onClick={() => this.playMusik(obj._id)}><p>
                        <small style={{marginRight: '10px'}}>{obj.number}.</small>
                        {obj.title}
                        <small style={{
                            background: 'lightblue',
                            padding: '3px',
                            borderRadius: '10px'
                        }}>{obj.duration}</small></p>
                        <button onClick={() => this.playVideo(obj.href, true)}>youtube</button>
                    </div>
                )}
                {<div>
                    <Modal isOpen={this.state.isOpen}>
                        <button
                            onClick={() => this.playVideo(null, false)}
                            style={styles}
                        >X
                        </button>
                        <iframe title={this.state.href} width="499" height="400" src={this.state.href}
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                        >
                        </iframe>
                    </Modal></div>
                }
            </div>
        );
    }
}

const styles = {
    position: 'absolute',
    top: '-29px',
    left: '0px',
    border: 'none',
    background: 'none',
    outline: 'none',
    fontWeight: 'bold'
};

const mapStateToProps = state => ({
    user: state.users.user,
    tracks: state.tracks.tracks,
    album: state.tracks.album
});

const mapDispatchToProps = dispatch => ({
    orderTracks: (id) => dispatch(orderTracks(id)),
    orderAlbumName: (id) => dispatch(orderAlbumName(id)),
    orderPlayMusik: (id) => dispatch(orderPlayMusik(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);