import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Feather, MaterialCommunityIcons, FontAwesome,  Ionicons } from '@expo/vector-icons';

import styles from '../Styles';
import Dock from '../components/Dock';

export class Tracker extends Component {
  render() {
    return (
      <LinearGradient colors={['#aec9eb', 'rgba(174, 201, 235, 0.75)']} style={styles.container}>

        {/* Back Button */}
        <View style={styles.top_left}>
            <Ionicons name="ios-arrow-back" size={25} color="#ffffff" onPress={ () => this.props.navigation.goBack() }/>
        </View>

        {/* Introduction */}
        <View style={{alignItems: 'center', paddingTop: 0}}>
        <Text style={styles.white_40}>Tracker Settings</Text>
        </View>

        {/* Account Info */}
          <LinearGradient colors={['#ffffff', '#fbfbfb']} style={styles.account_card} >
            <View style={{alignItems: 'left', paddingTop: 30, paddingLeft: 20}}>
              <Text style={styles.blue_settings}>Current streak</Text>
              <Text style={styles.blue_settings}>Longest streak</Text>
              <Text style={styles.blue_settings}>Start date</Text>
            </View>
          </LinearGradient>

        {/* Dock */}
        <Dock navigation={this.props.navigation}/>

      </LinearGradient>
    )
  }
}

export default Tracker;