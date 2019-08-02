import React, { Component } from "react";
import { 
    View,
    Text,
    YellowBox,
    StyleSheet
} from "react-native";
import { 
    Container, Header, Left, Body, Title, 
    Subtitle, Right, Content, Card, CardItem,
    Item, Picker, Icon, Label, Input, Button,
} from 'native-base';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);

class Home extends Component {
    render() {
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
                                        placeholder="Pilih Provinsi Asal"
                                        placeholderStyle={{ color: '#3CB371' }}
                                    >
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
                            <Text>Alamat Tujuan</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Item picker style={{marginTop: 10}}>
                                    <Picker
                                        mode="dropdown"
                                        style={{ width: undefined }}
                                        placeholder="Pilih Kota Tujuan"
                                        placeholderStyle={{ color: '#3CB371' }}
                                    >
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