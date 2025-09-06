import React, { PureComponent } from 'react'
import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native'

export default class index extends PureComponent {
  render() {
    return (
      <View style={styles.bg}>
        <Image style={styles.img} source={require('../../assets/images/pfp.png')} />

        <Text style={styles.txtn}>Jose Raphael B. Santos</Text>
        <Text> </Text>
        <Text style={styles.txtc}>User: Pepper43</Text>
        <Text style={styles.txtc}>Bio: College Student</Text>
        <Text> </Text>
        <Text style={styles.txtc}>Course:</Text>
        <Text style={styles.txtc}>Bachelor of Science in Information Technology</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    bg:{
        backgroundColor:'#325886', alignItems:'center',
        flex: 1, padding:50, 
    },

    img:{
        width:150, height:150,
        padding:50, borderRadius:30,
    },
    txtn:{
        color:'white', fontSize: 20, fontWeight:'bold'
    },
    txtc:{
        color:'white',
    }
})

