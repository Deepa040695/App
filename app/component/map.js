import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  TextInput,
  AsyncStorage,

} from 'react-native';
import ImagePicker from "react-native-image-picker";
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MapView from 'react-native-maps';
import { Header, Container } from 'native-base';

export default class map extends Component {

  static navigationOptions = {
    header: null
  }


  constructor() {
    super();
    this.state = {



    }
  }



  render() {
    return (

      <Container>
        <Header style={{ height: 65, backgroundColor: "#009dae" }} >
          <View style={styles.textWrapper}   >



            {/* <View style={{ width: '100%', height: "100%", flexDirection: 'row', marginTop: "5%" }}> */}
            <View style={{ flexDirection: 'row', }}>
              <View style={{ flexDirection: 'row', width: '35%', marginLeft: 25, marginTop: 10 }}>

                <Image
                  style={{ marginLeft: -14, height: 22, width: 22, marginTop: 10 }}
                  source={require('./images/back.png')}
                />
                <TouchableOpacity onPress={() => this.props.navigation.navigate('RoomSelection')}>
                  <View style={{ width: '50%', flexDirection: 'row' }}>
                    <Image
                      style={{ marginLeft: 20, height: 22, width: 22, marginTop: 10 }}
                      source={require('./images/roomselection.png')}
                    />

                    <Text style={{
                      color: "#aadae0",
                      //marginLeft: 10,
                      textAlign: 'center',
                      fontSize: 10,
                      marginLeft: -50,
                      marginTop: 30
                    }}> Room Selection </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('users')}>
                  <View style={{ width: '50%', flexDirection: 'row' }}>
                    <Image
                      style={{ marginLeft: 10, height: 20, width: 20, marginTop: 10 }}
                      source={require('./images/chat.png')}
                    />
                    <Text style={{
                      color: "#aadae0",
                      textAlign: 'center',
                      fontSize: 10,
                      // marginLeft: 7,
                      marginLeft: -23,
                      marginTop: 30,
                      borderBottomWidth: 2,
                      borderBottomColor: 'white',
                      // marginBottom: -750,
                    }} > Chat </Text>
                  </View>
                </TouchableOpacity>




                <TouchableOpacity onPress={() => this.props.navigation.navigate('map')}>
                  <View style={{ width: '50%', flexDirection: 'row' }}>
                    <EvilIcons style={{ marginLeft: 15, height: 60, width: 30, marginTop: 5 }}
                      name="sc-telegram" size={35} color='#69b3f6'
                    />
                    {/* <Image
                    style={{ marginLeft: 15, height: 20, width: 20, marginTop: 10 }}
                    source={require('./images/messag.png')}
                  /> */}
                    <Text style={{
                      color: "#aadae0",
                      textAlign: 'center',
                      fontSize: 10,
                      // marginLeft: 7,
                      marginLeft: -28,
                      marginTop: 30
                    }} > Map View </Text>
                  </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => this.props.navigation.navigate('users')}>
                  <View style={{ width: '50%', flexDirection: 'row' }}>
                    <Image
                      style={{ marginLeft: 5, height: 20, width: 20, marginTop: 10 }}
                      source={require('./images/view-list.png')}
                    />
                    <Text style={{
                      color: "#aadae0",
                      textAlign: 'center',
                      fontSize: 10,
                      // marginLeft: 7,
                      marginLeft: -25,
                      marginTop: 30
                    }} > List View </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <Image
                style={{ marginTop: 5, width: '15%', height: '80%', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}
                source={require('./images/logo_web.png')}
              />

              <View style={{ flexDirection: 'row', width: '50%', marginLeft: 10, marginTop: 10 }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('')}>
                  <View style={{ width: '50%', flexDirection: 'row' }}>
                    <Image
                      style={{ marginLeft: 17, height: 20, width: 20, marginTop: 10 }}
                      source={require('./images/search.png')}
                    />
                    <Text style={{
                      color: "#aadae0",
                      marginLeft: -30,
                      marginTop: 30,
                      textAlign: 'center',
                      fontSize: 10
                    }}> Search </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Notifications')}>
                  <View style={{ width: '50%', flexDirection: 'row' }}>
                    <Image
                      style={{ marginLeft: 25, height: 20, width: 20, marginTop: 10 }}
                      source={require('./images/notification.png')}
                    />
                    <Text style={{
                      color: "#aadae0",
                      textAlign: 'center',
                      fontSize: 10,
                      marginLeft: -40,
                      marginTop: 30
                    }} >Notification </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')}>
                  <View style={{ width: '50%', flexDirection: 'row' }}>
                    <Image
                      style={{ marginLeft: 15, height: 20, width: 20, marginTop: 10 }}
                      source={require('./images/settings.png')}
                    />
                    <Text
                      style={{
                        color: "#aadae0",
                        textAlign: 'center',
                        fontSize: 10,
                        marginLeft: -30,
                        marginTop: 30
                      }}
                    >Settings </Text>
                  </View>
                </TouchableOpacity>
                <View style={{ marginLeft: 5, flexDirection: 'row', width: '35%', height: 35, marginTop: 10, borderWidth: .8, borderColor: '#fff' }}>
                  {/* <TouchableOpacity onPress={() => this.flat()}> */}
                  <TextInput
                    placeholder="Select Room"
                    editable={false}
                    placeholderTextColor='#fff'
                    style={{ backgroundColor: 'transparent', fontSize: 10 }}
                  // onChangeText={this.onchangetext}
                  />
                  <View style={{}}>
                    <Image style={{ width: 20, height: 20, marginTop: 10 }}
                      soure={require('./images/downarrow.png')} /></View>
                  {/* </TouchableOpacity> */}
                </View>

              </View>
            </View>
          </View>

          {/* </View> */}
        </Header>


        <View style={styles.container}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }} />

        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  map: {
    marginTop: 10,
    flex: 1,
    height: '100%',
  },
  firstContainer: {
    flex: .7,
    backgroundColor: '#25344c',

  },
  secondContainer: {
    flex: 1.5,

  },
  thirdContainer: {
    flex: .7,
    backgroundColor: '#25344c',
  },
  input: {
    margin: 5,
    height: 40,
    width: 320,
    padding: 10,
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 1,
    borderStyle: 'solid',
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: '#1f2c3f',
    marginVertical: 12,
    marginTop: 25
  },
  text: {
    marginLeft: 10,
    marginTop: 15,
    height: 20,
    width: 25,
    backgroundColor: '#F470A4',
    color: 'white',
    textAlign: 'center'
  }

});