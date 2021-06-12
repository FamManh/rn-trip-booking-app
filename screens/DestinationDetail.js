import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, icons, images, SIZES } from '../constants'

const StarReview = ({ rate }) => {

  const starComponents = []
  const fullStart = Math.floor(rate)
  const noStart = Math.floor(5 - rate)
  const halfStart = 5 - fullStart - noStart

  // full star
  for (let i = 0; i < fullStart; i++) {
    starComponents.push(
      <Image source={icons.starFull} key={`full-${i}`} resizeMode="contain" style={{ height: 18, width: 18 }} />
    )
  }

  // half star
  for (let i = 0; i < halfStart; i++) {
    starComponents.push(
      <Image source={icons.starHalf} key={`half-${i}`} resizeMode="contain" style={{ height: 18, width: 18 }} />
    )
  }

  // no star
  for (let i = 0; i < noStart; i++) {
    starComponents.push(
      <Image source={icons.starEmpty} key={`no-${i}`} resizeMode="contain" style={{ height: 18, width: 18 }} />
    )
  }

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {starComponents}
      <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.body3 }}>{rate}</Text>
    </View>
  )
}

const DestinationDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header  */}
      <View style={{ flex: 2 }}>
        <Image source={images.skiVillaBanner} resizeMode="cover" style={{ width: "100%", height: "80%" }} />
        <View style={[{
          padding: SIZES.padding,
          position: "absolute",
          left: "5%",
          right: "5%",
          bottom: "5%",
          backgroundColor: COLORS.white,
          borderRadius: 15
        }, styles.shadow]}>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.shadow}>
              <Image source={images.skiVilla} resizeMode="cover" style={{ width: 70, height: 70, borderRadius: 15 }} />
            </View>
            <View style={{ marginHorizontal: SIZES.radius, justifyContent: 'space-around' }}>
              <Text style={{ ...FONTS.h3 }}>Ski Villa</Text>
              <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>France</Text>
              <StarReview rate={4.5} />
            </View>
          </View>

          <View style={{ marginTop: SIZES.radius }}>
            <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
              Ski Villa offers simple rooms with mountain views in front of the ski lift to the Ski Resort
            </Text>
          </View>
        </View>

        {/* Header Button  */}
        <View style={{ position: 'absolute', top: 20, left: 15, right: 15, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ marginLeft: SIZES.padding }} onPress={() => navigation.goBack()}>
            <Image source={icons.back} resizeMode="contain" style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: SIZES.padding }} onPress={() => console.log("Pressed")}>
            <Image source={icons.menu} resizeMode="contain" style={{ width: 25, height: 25 }} />
          </TouchableOpacity>
        </View>

      </View>

      {/* Body  */}
      <View style={{ flex: 1.5, marginHorizontal: SIZES.padding }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Image source={icons.villa} resizeMode="cover" style={{ height: 50, width: 50 }} />
            <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.h3 }}>Villa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Image source={icons.parking} resizeMode="cover" style={{ height: 50, width: 50 }} />
            <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.h3 }}>Parking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ alignItems: 'center' }}>
            <Image source={icons.wind} resizeMode="cover" style={{ height: 50, width: 50 }} />
            <Text style={{ marginTop: SIZES.base, color: COLORS.gray, ...FONTS.h3 }}>5°C</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: SIZES.base }}>
          <Text style={{ ...FONTS.h2 }}>About</Text>
          <Text style={{ color: COLORS.gray, marginTop: SIZES.radius, ...FONTS.body3 }}>Located at the Alps with an altitude of 1,702 meters. The ski area is the largest ski area in the world and is known as the best place to ski. Many other facilities, such as fitness center, sauna, steam room to star-rated restaurants.</Text>
        </View>
      </View>

      {/* Footer  */}
      <View style={{ flex: 0.5, margin: SIZES.padding }}>
        <LinearGradient style={{ flex: 1, borderRadius: 15 }} colors={["#edf0fc", "#d6dfff"]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ width: "70%", justifyContent: 'center', paddingLeft: SIZES.padding }}>
            <Text style={{...FONTS.h1}}>$1000</Text>
          </View>
          <View style={{ width: "30%" }}>
            <TouchableOpacity style={[styles.shadow, {margin: SIZES.base}]}
              onPress={() => console.log("Pressed")}
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
        </View>
        </LinearGradient>
      </View>

    </View>
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
    shadowRadius: 3.48,
    elevation: 5
  }
})

export default DestinationDetail
