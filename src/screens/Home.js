import React, { Component } from "react";
import { 
    View,
    Text,
    YellowBox,
    StyleSheet
} from "react-native";
import { 
    Container, Header, Body, Title, Thumbnail,
    Subtitle, Content, Card, CardItem,
    Item, Picker, Label, Input, Button, Right,
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
            provinces: [],
            originCities: [],
            destinationCities: [],
            selectedOriginProvince: null,
            selectedOriginCity: null,
            selectedDestinationProvince: null,
            selectedDestinationCity: null,
            weight: 0,
            courier: null,
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
        })
        .then((response)=>response.json())
        .then((responseData) =>{
            console.log(responseData)
            let status = responseData['rajaongkir']['status']['code'];
            if (status===200) {
                this.setState({
                    provinces: responseData['rajaongkir']['results']
                })
            }
        })
    }

    //pilih provinsi asal
    onOriginProvinceChange = (val) => {
        this.setState({
            selectedOriginProvince: val
        }, ()=>{
            fetch(URL +'/city?province='+ this.state.selectedOriginProvince.province_id,{
                method: 'GET',
                headers: {
                    'key': KEY
                }
            })
            .then((response) => response.json())
            .then((responseData) => {
                console.log('After change')
                console.log(responseData)
                let status = responseData['rajaongkir']['status']['code'];
                if (status===200) {
                    this.setState({
                        originCities: responseData['rajaongkir']['results']
                    })
                }
            })
        });
    }

    //pilih kota asal
    onOCityChange = (val) => {
        this.setState({
            selectedOriginCity: val
        })
    }

    //pilih provinsi tujuan
    onDestinationProvinceChange = (val) => {
        this.setState({
            selectedDestinationProvince: val
        }, ()=>{
            fetch(URL +'/city?province='+ this.state.selectedDestinationProvince.province_id,{
                method: 'GET',
                headers: {
                    'key': KEY
                }
            })
            .then((response) => response.json())
            .then((responseData) => {
                let status = responseData['rajaongkir']['status']['code'];
                if (status===200) {
                    this.setState({
                        destinationCities: responseData['rajaongkir']['results']
                    })
                }
            })
        });
    }

    //pilih kota tujuan
    onDestinationCityChange = (val) => {
        this.setState({
            selectedDestinationCity: val
        })
    }

    //navigate to screen detail
    onNavigationToDetail = () => {
        let params = {
            originCity: this.state.selectedOriginCity.city_id,
            destinationCity: this.state.selectedDestinationCity.city_id,
            weight: this.state.weight,
            courier: this.state.courier
        }
        //console.log('data yang dikirim')
        //console.log(params);
        if (params!=null) {
            this.props.navigation.navigate('DetailScreen',{data: params})
        } else {
            return(
                <View style={{flex:1}}>
                    <Text>Jangan ada yang kosong</Text>
                </View>
            )
        }
    }

    render() {

        let provinceItems = <View></View>  
        let provinceItemDestination = <View></View>
        let originCityItem = <View></View>
        let destinationCityItem = <View></View>  

        //for provinsi asal
        if (this.state.provinces) {
            provinceItems = this.state.provinces.map(prov => {
                return(
                    <Picker.Item
                        key={prov.province_id}
                        label={prov.province}
                        value={prov}
                    />
                );
            });
        }
        // for provinsi tujuan
        if (this.state.provinces) {
            provinceItemDestination = this.state.provinces.map(prov => {
                return(
                    <Picker.Item
                        key={prov.province_id}
                        label={prov.province}
                        value={prov}
                    />
                );
            });
        }

        if (this.state.originCities) {
            originCityItem = this.state.originCities.map(city =>{
                return(
                    <Picker.Item
                        key={city.city_id}
                        label={city.city_name}
                        value={city}
                    />
                );
            });
        }

        if (this.state.destinationCities) {
            destinationCityItem = this.state.destinationCities.map(city =>{
                return(
                    <Picker.Item
                        key={city.city_id}
                        label={city.city_name}
                        value={city}
                    />
                );
            });
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
                            <Text style={styles.textStyle}>Alamat Asal</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        style={{ width: undefined }}
                                        placeholder="Pilih Provinsi"
                                        placeholderStyle={{ color: '#3CB371' }}
                                        selectedValue={this.state.selectedOriginProvince}
                                        onValueChange={this.onOriginProvinceChange}
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
                                        selectedValue={this.state.selectedOriginCity}
                                        onValueChange={this.onOCityChange}
                                    >
                                        <Picker.Item label="Pilih Kota" value=""/>
                                        {originCityItem}
                                    </Picker>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text style={styles.textStyle}>Alamat Tujuan</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                            <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        style={{ width: undefined }}
                                        placeholder="Pilih Provinsi"
                                        placeholderStyle={{ color: '#3CB371' }}
                                        selectedValue={this.state.selectedDestinationProvince}
                                        onValueChange={this.onDestinationProvinceChange}
                                    >
                                        <Picker.Item label="Pilih Provinsi" value=""/>
                                        {provinceItemDestination}
                                    </Picker>
                                </Item>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        style={{ width: undefined }}
                                        placeholder="Pilih Kota"
                                        placeholderStyle={{ color: '#3CB371' }}
                                        selectedValue={this.state.selectedDestinationCity}
                                        onValueChange={this.onDestinationCityChange}
                                    >
                                        <Picker.Item label="Pilih Kota" value=""/>
                                        {destinationCityItem}
                                    </Picker>
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text style={styles.textStyle}>Berat Paket</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item floatingLabel>
                                    <Label>Grams</Label>
                                    <Input 
                                        onChangeText={(val)=>this.setState({weight:val})}
                                        maxLength={6}
                                        keyboardType='numeric'
                                    />
                                </Item>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem header>
                            <Text 
                                style={styles.textStyle}
                            >
                                Kurir
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item picker>
                                    <Picker
                                        mode="dropdown"
                                        style={{ width: undefined, color: '#3CB371' }}
                                        placeholder="Pilih Kurir"
                                        placeholderStyle={{ colorLabel: '#3CB371' }}
                                        selectedValue={this.state.courier}
                                        onValueChange={(val)=>this.setState({courier:val})}
                                    >
                                        <Picker.Item label="Pilih Kurir" value="" />
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
                        onPress={()=>this.onNavigationToDetail()}
                    >
                        <Text style={[styles.textStyle,{color: '#fff'}]}>Cek Ongkir</Text>
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
    },
    textStyle:{
        fontSize: 16,
        fontWeight: 'bold'
    }
});