import React, {Component} from "react";
import {Container, Header, Title, Content, Footer, FooterTab, Button, Body, Text, Left, Icon, Right, Spinner} from "native-base";
import Restaurants from "./Restaurants";
import Details from "./Details";
import * as actions from "../actions/actions";
import {connect} from "react-redux";
import {RESTAURANTS, DETAILS, LOAD} from '../../pages';
import THEFooter from "./Footer";
import THEHeader from "./Header";

class Index extends Component {
    render() {

        let returnButton;
        let bodyTag;

        switch (this.props.page) {
            case DETAILS:
                returnButton = (
                    <Content>
                        <Button full primary onPress={this.props.toList}>
                            <Left>
                                <Icon name ='arrow-back' />
                            </Left>
                            <Text>Back to List</Text>
                        </Button>
                    </Content>
                );
                bodyTag = <Details/>;
                break;
            case RESTAURANTS:
                bodyTag = (
                    <Content>
                        <Button full primary onPress={this.props.fetchData}>
                            <Text>FIND ALLL THE NAMSSSSS</Text>
                        </Button>

                        <Restaurants/>
                    </Content>
                );
                break;
            case LOAD:
                bodyTag = <Spinner color='blue'/>;
                break;
            default:
                bodyTag = <Text>Error Check Network</Text>
        }
        return (
            <Container>
                <THEHeader/>
                <Header>
                    <Left/>
                    <Body>
                    <Title>{this.props.selectedRestaurant ? this.props.selectedRestaurant.name :'Restaurant List'}</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    {returnButton}
                    {bodyTag}
                </Content>
                <THEFooter/>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        page: state.page,
        selectedItem: state.selectedRestaurant
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: () => dispatch(actions.getGeolocalizedList()),
        toList: () => dispatch(actions.toList())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);