import React, { Component } from "react";
import { 
    View,
    Text,
    YellowBox,
    StyleSheet
} from "react-native";
import { 
    Container, Content, List, ListItem, 
    Left, Thumbnail, Body, Right, Header, 
    Title, Button, Icon
} from "native-base";

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);

class Detail extends Component {
    render() {
        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor: '#3CB371'}}>
                    <Left style={{flex: 1}}>
                        <Button transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon
                                style={{color: '#FFF'}}
                                type="AntDesign" name="back"
                            />
                        </Button>
                    </Left>
                    <Body style={{alignItems: 'center', flex: 9}}>
                        <Title style={{color: '#fff'}}>Ongkos Kirim</Title>
                    </Body>
                </Header>

                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{uri: 'https://i.pinimg.com/originals/8d/3b/f8/8d3bf8fda0c800bde077815241705bf3.png'}}/>
                            </Left>
                            <Body>
                                <Text>JNE</Text>
                                <Text>Harga</Text>
                            </Body>
                            <Right>
                                <Text>Harga</Text>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
export default Detail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center'
    }
});