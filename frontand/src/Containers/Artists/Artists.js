import React, {Component} from 'react';
import {connect} from "react-redux";
import {orderArtist} from "../../Store/Actions/actionArtists";
import {Card, CardBody, CardImg, CardTitle} from "reactstrap";
import {apiUrl} from "../../apiUrl";
import {NavLink as RouterNavLink} from 'react-router-dom';


class Artists extends Component {
    componentDidMount() {
        this.props.orderArtists();
    }

    render() {
        return (
            <div>
                <h1>Исполнители: </h1>
                {this.props.artists && this.props.artists.map(obj=>
                        <Card style={{width: '200px'}} key={obj._id} tag={RouterNavLink} to={`/albums/${obj._id}`}>
                            <CardImg top width="50%" src={ apiUrl + '/uploads/' + obj.image } alt={obj.name} />
                            <CardBody>
                                <CardTitle>{obj.name}</CardTitle>
                            </CardBody>
                        </Card>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    artists: state.artists.artists
});
const mapDispatchToProps = dispatch => ({
    orderArtists: ()=> dispatch(orderArtist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);