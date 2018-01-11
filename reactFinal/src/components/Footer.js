import React, {Component} from "react";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from "native-base";

export default class THEFooter extends Component {
    render() {
        return(
            <Footer>
                <FooterTab>
                    <Body>
                        <Text>© Zaheed Rizwan Jaffer</Text>
                    </Body>
                </FooterTab>
            </Footer>
        )
    }
}