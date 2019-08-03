import React, { Component } from "react";
import { 
    View,
    Text,
    YellowBox,
    StyleSheet
} from "react-native";
import { 
    Container, Header, Body, Title, 
    Subtitle, Content, Card, CardItem,
    Item, Picker, Label, Input, Button,
} from 'native-base';

import {URL, KEY} from '../components/Const';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Warning: componentWillUpdate is deprecated',
]);

class Home extends Component {

    constructor() {
        super();
        this.state = {
            provinces: []
        }
    }
    componentDidMount() {
        this.onLoadProvince();
    }

    onLoadProvince = () => {
        fetch(URL+'/province',{
            method: 'GET',
            headers: {
                'key': KEY
            }
        }).then((response)=>response.json()).then((responseData) =>{
            console.log(responseData)
            let status = responseData['rajaongkir']['status']['code'];
            if (status==200) {
                this.setState({
                    provinces: responseData['rajaongkir']['results']
                })
            }
        })
    }

    render() {

        let provinceItems = <View></View>        
        if (this.state.provinces) {
            provinceItems = this.state.provinces.map(prov => {
                return(
                    <Picker.Item
                        key={prov.province_id}
                        label={prov.province}
                        value={prov}
                    />
                );
            })
        }

        return (
            <Container>
                <Header style={{backgroundColor: '#3CB371'}}>
                    <Body style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Title style={{color: '#fff'}}>App Ongkir</Title>
                        <Subtitle style={{color: '#fff'}}>Input Data</Subtitle>
                    </Body>
                </Header>

                <Content padder>
                    <Card>
                        <CardItem header>
                            <Text>Alamat Asal</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        style={{ width: undefined }}
                                        placeholder="Pilih Provinsi"
                                        placeholderStyle={{ color: '#3CB371' }}
                                    >
                                        <Picker.Item label="Pilih Provinsi" value=""/>
                                        {provinceItems}
                                    </Picker>
                                </Item>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        style={{ width: undefined }}
                                        placeholder="Pilih Kota"
                                        placeholderStyle={{ color: '#3CB371' }}
                                    >
                                        <Picker.Item label="Pilih Kota" value=""/>
                                        <Picker.Item label="ATM Card" value="key1" />
                                        <Picker.Item label="Debit Card" value="key2" />
                                        <Picker.Item label="Credit Card" value="key3" />
                                        <Picker.Item label="Net Banking" value="key4" />
                                    </Picker>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>Alamat Tujuan</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        style={{ width: undefined }}
                                        placeholder="Pilih Provinsi"
                                        placeholderStyle={{ color: '#3CB371' }}
                                    >
                                        <Picker.Item label="Pilih Provinsi" value=""/>
                                        <Picker.Item label="Wallet" value="key0" />
                                        <Picker.Item label="ATM Card" value="key1" />
                                        <Picker.Item label="Debit Card" value="key2" />
                                        <Picker.Item label="Credit Card" value="key3" />
                                        <Picker.Item label="Net Banking" value="key4" />
                                    </Picker>
                                </Item>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        style={{ width: undefined }}
                                        placeholder="Pilih Kota"
                                        placeholderStyle={{ color: '#3CB371' }}
                                    >
                                        <Picker.Item label="Pilih Kota" value=""/>
                                        <Picker.Item label="Wallet" value="key0" />
                                        <Picker.Item label="ATM Card" value="key1" />
                                        <Picker.Item label="Debit Card" value="key2" />
                                        <Picker.Item label="Credit Card" value="key3" />
                                        <Picker.Item label="Net Banking" value="key4" />
                                    </Picker>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>Berat Paket</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item floatingLabel>
                                    <Label>Grams</Label>
                                    <Input/>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text>Kurir</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        style={{ width: undefined, color: '#3CB371' }}
                                        placeholder="Pilih Kurir"
                                        placeholderStyle={{ colorLabel: '#3CB371' }}
                                    >
                                        <Picker.Item label="JNE" value="jne" />
                                        <Picker.Item label="TIKI" value="tiki" />
                                        <Picker.Item label="POS" value="pos" />
                                    </Picker>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>

                </Content>
                <View style={{justifyContent: 'flex-end'}}>
                    <Button rounded block style={{margin: 10, backgroundColor: '#3CB371'}}
                        onPress={()=>this.props.navigation.navigate('DetailScreen')}
                    >
                        <Text style={{color: '#fff'}}>Cek Ongkir</Text>
                    </Button>
                </View>
            </Container>
        );
    }
}
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});