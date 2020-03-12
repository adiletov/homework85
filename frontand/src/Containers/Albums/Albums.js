import React, {Component} from 'react';
import {connect} from "react-redux";
import {Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import {apiUrl} from "../../apiUrl";
import {NavLink as RouterNavLink} from 'react-router-dom';
import {orderAlbumId, orderArtistName} from "../../Store/Actions/actionAlbums";


class Albums extends Component {
   async componentDidMount() {
        const id = this.props.match.params.id;
        await this.props.orderArtistName(id);
        this.props.orderAlbumId(id);
    }

    render() {
        return (
            <div>
                <h3 style={{textAlign: 'center', margin: '20px'}}>{this.props.artist.name}</h3>
                {this.props.albums && this.props.albums.map(obj=>
                    <Card style={{width: '200px'}} key={obj._id} tag={RouterNavLink}  to={`/tracks/${obj._id}`}>
                        <CardImg top width="100%" src={apiUrl + '/uploads/' + obj.coverImage} alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{obj.title}</CardTitle>
                            <CardText>
                                <small className="text-muted">{obj.yearOfIssue}</small>
                            </CardText>
                        </CardBody>
                    </Card>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    albums: state.albums.albums,
    artist: state.albums.artist
});
const mapDispatchToProps = dispatch => ({
    orderAlbumId: (id)=> dispatch(orderAlbumId(id)),
    orderArtistName: (id) => dispatch(orderArtistName(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Albums);