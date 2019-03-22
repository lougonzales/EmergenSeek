import logoIcon from './images/logo.png'
import startIcon from './images/start.png'
import contactIcon from './images/contact.png'
import menuIcon from './images/menu.png'
import aid from './images/aid.png'
import traffic from './images/traffic.png'
import domestic from './images/domestic.png'
import disaster from './images/disaster.png'

import React, {Component} from 'react';
import {Alert, Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import {StackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return <AppCont/>;
  }
}
class Home extends React.Component {
  render() {
    return (
      <View style={s.container, s.red}>
        <View style={s.fullScreen}>
          <View style={s.header}>
            <View style={s.menu}>
              <Image
                source={logoIcon}
                style={s.icon}
              />
            </View>
              <View style={s.head}>
                <Text style={{fontSize:40}}>EmergenSeek</Text>
              </View>
          </View>
            <View style={{paddingHorizontal: 20}}>
                <View style={s.row}>
                    <View style={s.col}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('ContactPerson')}
                            style={s.button}
                        >
                            <Image source={contactIcon} style={s.icon}/>
                            <Text>SET EMERGENCY CONTACT PERSON</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={s.row}>
                    <View style={s.col}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('StartAlert')}
                            style={s.button}
                        >
                            <Image source={startIcon} style={s.icon}/>
                            <Text>SEND ALERT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
      </View>
    );
  }
}

class Set extends React.Component {
  state = {
    person: '',
    number: ''
  }
  handlePerson = (text) => {
    this.setState({ person: text })
  }
  handleNumber = (text) => {
    this.setState({ number: text })
  }
  render() {
    return (
      <View style={s.container, s.red}>
        <View style={s.fullScreen}>
            <View style={s.header}>
                <View style={s.head}>
                    <Text style={{fontSize:40}}>Set Emergency Contact Person</Text>
                </View>
            </View>
            <View style={{paddingHorizontal: 20}}>
                <View style={s.row}>
                  <View style={s.col}>
                      <Text>Contact Person</Text>
                      <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={this.handlePerson}
                        value={this.state.text}
                      />
                  </View>
                  <View style={s.col}>
                      <Text>Contact Number</Text>
                      <TextInput
                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                        onChangeText={this.handleNumber}
                        value={this.state.text}
                      />
                </View>
              </View>
              <View style={s.row}>
                <TouchableOpacity>
                  <Text>Save</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    );
  }
}

class AlertView extends React.Component {
  state = { 
    latitude: '',
    longitude: '',
    address: ''
  }

  // setters
  sendSms = (message) => {
    //let msg = message + address
    //console.log(this.state.address)
  }

  render() {
    return (
      <View style={s.container, s.red}>
        <View style={s.fullScreen}>
            <View style={s.header}>
                <View style={s.head}>
                    <Text style={{fontSize:40}}>Dashboard</Text>
                </View>
            </View>
            <View style={{paddingHorizontal: 20}}>
                <Text style={{paddingVertical: 10}}>SELECT EMERGENCY TYPES:</Text>
                <View style={s.row}>
                    <View style={s.col}>
                        <TouchableOpacity
                            onPress={() => this.sendSms("I need first aid. I'm at ")}
                            style={s.button}
                        >
                            <Image source={aid} style={s.icon}/>
                            <Text>First Aid</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={s.col}>
                        <TouchableOpacity
                            onPress={() => alert("I'm in a traffic accident. I'm at ")}
                            style={s.button}
                        >
                            <Image source={traffic} style={s.icon}/>
                            <Text>Traffic Accident</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={s.row}>
                    <View style={s.col}>
                        <TouchableOpacity
                            onPress={() => alert("I'm in a domestic accident. I'm at ")}
                            style={s.button}
                        >
                            <Image source={domestic} style={s.icon}/>
                            <Text>Domestic Accident</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={s.col}>
                        <TouchableOpacity
                            onPress={() => alert("Help! There's a natural disaster at ")}
                            style={s.button}
                        >
                            <Image source={disaster} style={s.icon}/>
                            <Text>Natural Disaster</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
      </View>
    );
  }
}
const MyNavigator = createSwitchNavigator({
  HomeScreen: Home,
  StartAlert: AlertView,
  ContactPerson: Set
  });

const AppCont = createAppContainer(MyNavigator);

let Screen = Dimensions.get("window");

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  fullScreen: {
    height: Screen.height,
    width: Screen.width
  },
  red: {
    backgroundColor: '#e55039'
  },
  icon: {
    width:50,
    height:50
  },
  menu: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  head: {
    flex: 3,
    textAlign: 'center',
    paddingVertical: 10
  },
  body: {
    paddingHorizontal: 20
  },
  row: {
    flexDirection: 'row'
  },
  col: {
    flex: 1,
    padding:4
  },
  button: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  }
});