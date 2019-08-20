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
import NumberFormat from 'react-number-format';

import {URL, KEY, LOGO} from '../components/Const';


YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);

class Detail extends Component {

    constructor() {
        super();
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        this.cekOngkosKirim();
    }

    cekOngkosKirim = () => {
        let params = this.props.navigation.state.params.data;
        const formData = new URLSearchParams();
        formData.append('origin', params.originCity);
        formData.append('destination', params.destinationCity);
        formData.append('weight', params.weight);
        formData.append('courier', params.courier);
        //console.warn(params.courier);

        fetch(URL+'/cost', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'key': KEY
            },
            body: formData.toString()
        })
        .then((response)=>response.json())
        .then((responseData)=>{
            let status = responseData['rajaongkir']['status']['code'];
            console.log('response data')
            console.log(responseData);
            if (status === 200) {
                this.setState({
                    results: responseData['rajaongkir']['results'][0]['costs']
                })
                console.log('console results')
                console.log(this.state.results);
            }
        });

    }

    render() {
        let costItem = <View></View>
        if (this.state.results) {
            costItem = this.state.results.map(item => {
                let params = this.props.navigation.state.params.data;
                return(
                    <ListItem thumbnail key={new Date().getMilliseconds+Math.random()}>
                        <Left>
                            <Thumbnail source={{uri: LOGO[params.courier]}}/>
                        </Left>
                        <Body>
                            <Text>{item.service}</Text>
                            <Text note>{item.description}</Text>
                            <Text>{item.cost[0].etd}</Text>
                        </Body>
                        <Right>
                            <NumberFormat
                                value={item.cost[0].value}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'Rp '}
                                suffix={'.00'}
                                renderText={value=><Text>{value}</Text>}
                            />
                        </Right>
                    </ListItem>
                )
            })
        }

        return (
            <Container style={styles.container}>
                <Header style={{backgroundColor: '#3CB371'}}>
                    <Left style={{flex: 1}}>
                        <Button transparent
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon
                                style={{color: '#FFF', height: 25, width: 25}}
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
                        {costItem}
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