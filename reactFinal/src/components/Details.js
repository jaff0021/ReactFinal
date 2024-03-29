import React, {Component} from "react";
import {Container, Header, Content, Text, Title, Body, Card, CardItem} from 'native-base';
import * as actions from "../actions/actions";
import { connect } from "react-redux";

class Details extends Component {

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Title>{this.props.item.name}</Title>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Text>Phone: {this.props.item.phone}</Text>
                            <Text>Distance: {(this.props.item.distance /1000).toFixed(2)} KM </Text>
                            <Text>Price: {this.props.item.price}</Text>
                            <Text>Rating: {this.props.item.rating}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        )
    }
}

function mapStateToProps(state){
    return {
        item: state.selectedRestaurant
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        getDetails : () => dispatch(actions.getDetails(ownProps.id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
