import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, images, SIZES } from '../constants'

const Onboarding = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={images.onboardingImage} resizeMode="contain" style={{ height: "100%", width: "100%" }} />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: SIZES.padding }}>
        <Text style={{ color: COLORS.black, marginBottom: SIZES.base, ...FONTS.h2 }}>Digital Ticket</Text>
        <Text style={{ color: COLORS.gray, textAlign: 'center', marginBottom: SIZES.padding, ...FONTS.body3 }}>Easy solution to buy tickets for your travel, business trips, transportation, bodging and culinary.</Text>
        <TouchableOpacity style={[styles.shadow, { width: "80%", height: 50 }]}
          onPress={() => navigation.navigate("Home")}
        >
          <LinearGradient
            style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
            colors={['#46aeff', '#5884ff']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>Start!</Text>

          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.28,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 15
  }
})

export default Onboarding
