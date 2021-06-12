import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { COLORS, FONTS, icons, images, SIZES } from '../constants'

const OptionItem = ({ icon, bgColor, label, onPress }) => {
  return (
    <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} onPress={onPress} >
      <View style={[styles.shadow, { width: 60, height: 60 }]} >
        <LinearGradient style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 15 }}
          colors={bgColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Image source={icon} resizeMode="contain" style={{ tintColor: COLORS.white, width: 30, height: 30 }} />
        </LinearGradient>
      </View>
      <Text style={{ marginTop: 5, color: COLORS.gray, ...FONTS.body4 }}>{label}</Text>

    </TouchableOpacity>
  )
}

const DestinationCard = ({ img, name, onPress, index }) => {
  return (
    <TouchableOpacity style={[{ flex: 1 }, index !== 0 ? { marginLeft: SIZES.base } : {},]} onPress={onPress}>
      <Image source={img} resizeMode="cover" style={{ height: "77%", width: SIZES.width * 0.28, borderRadius: 12 }} />
      <Text style={{ marginTop: 10, marginBottom: 12, ...FONTS.h4 }}>{name}</Text>
    </TouchableOpacity>
  )
}

const Home = ({navigation}) => {
  // Dummy Data
  const [destinations, setDestinations] = React.useState([
    {
      id: 0,
      name: "Ski Villa",
      img: images.skiVilla,
    },
    {
      id: 1,
      name: "Climbing Hills",
      img: images.climbingHills,
    },
    {
      id: 2,
      name: "Frozen Hills",
      img: images.frozenHills,
    },
    {
      id: 3,
      name: "Beach",
      img: images.beach,
    },
  ]);

  // function renderDestinations(item, index) {
  //   var destinationStyle = {};

  //   if (index == 0) {
  //     destinationStyle = { marginLeft: SIZES.padding, }
  //   }

  //   return (
  //     <TouchableOpacity
  //       style={{ justifyContent: 'center', marginHorizontal: SIZES.base, ...destinationStyle }}
  //       onPress={() => { navigation.navigate("DestinationDetail") }}
  //     >
  //       <Image
  //         source={item.img}
  //         resizeMode="cover"
  //         style={{
  //           width: SIZES.width * 0.28,
  //           height: '82%',
  //           borderRadius: 15
  //         }}
  //       />

  //       <Text style={{ marginTop: SIZES.base / 2, ...FONTS.h4 }}>{item.name}</Text>
  //     </TouchableOpacity>
  //   )
  // }

  return (
    <View style={styles.container}>
      {/* Banner  */}
      <View style={{ flex: 0.8, marginTop: SIZES.base, paddingHorizontal: SIZES.padding }}>
        <Image source={images.homeBanner} resizeMode="cover" style={{ height: "100%", width: "100%", borderRadius: 15 }} />
      </View>

      {/* Options  */}
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', marginTop: 16, paddingHorizontal: SIZES.base }}>
          <OptionItem icon={icons.airplane} bgColor={['#46aeff', '#5884ff']} label="Flight" onPress={() => console.log("Pressed")} />
          <OptionItem icon={icons.train} bgColor={['#fddf90', '#fcda13']} label="Train" onPress={() => console.log("Pressed")} />
          <OptionItem icon={icons.bus} bgColor={['#e973ad', '#da5df2']} label="Bus" onPress={() => console.log("Pressed")} />
          <OptionItem icon={icons.taxi} bgColor={['#fcaba8', '#fe6bba']} label="Taxi" onPress={() => console.log("Pressed")} />
        </View>
        <View style={{ flexDirection: 'row', marginTop: SIZES.radius, paddingHorizontal: SIZES.base }}>
          <OptionItem icon={icons.bed} bgColor={['#ffc465', '#ff9c5f']} label="Hotel" onPress={() => console.log("Pressed")} />
          <OptionItem icon={icons.eat} bgColor={['#7cf1fb', '#4ebefd']} label="Eats" onPress={() => console.log("Pressed")} />
          <OptionItem icon={icons.compass} bgColor={['#7be993', '#46caaf']} label="Adventure" onPress={() => console.log("Pressed")} />
          <OptionItem icon={icons.event} bgColor={['#fca397', '#fc7b6c']} label="Event" onPress={() => console.log("Pressed")} />
        </View>
      </View>

      {/* Destination  */}
      <View style={{ flex: 1, paddingHorizontal: SIZES.padding }}>
        <Text style={{ ...FONTS.h2, marginBottom: 5 }}>Destination</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1 }}
          keyExtractor={(item) => item.id.toString()}
          data={destinations}
          renderItem={({ item, index }) => <DestinationCard index={index} img={item.img} name={item.name} onPress={()=>navigation.navigate("DestinationDetail")} />} />

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
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})

export default Home
