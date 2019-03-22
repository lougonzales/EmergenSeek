import menuIcon from './images/menu.png'
import aid from './images/aid.png'
import traffic from './images/traffic.png'
import domestic from './images/domestic.png'
import disaster from './images/disaster.png'

import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { alertMsg: '' }
  }
  setAlertMsg(msg){
    this.setState(text => {alertMsg: msg})
  }

  /*showAlert(text) {
    this.setAlertMsg(text)
    alert(text)
  }*/



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
                            onPress={() => alert("First Aid")}
                            style={s.button}
                        >
                            <Image source={aid} style={s.icon}/>
                            <Text>First Aid</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={s.col}>
                        <TouchableOpacity
                            onPress={() => alert("Traffic Accident")}
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
                            onPress={() => alert("Domestic Accident")}
                            style={s.button}
                        >
                            <Image source={domestic} style={s.icon}/>
                            <Text>Domestic Accident</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={s.col}>
                        <TouchableOpacity
                            onPress={() => alert("Natural Disaster")}
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
    justifyContent: 'center',
    backgroundColor: '#eeeeee'
  }
});