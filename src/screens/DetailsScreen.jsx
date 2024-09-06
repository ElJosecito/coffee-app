import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'

// icons
// heart icon and back arrow icon
import { FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons'


const DetailsScreen = ({ navigation, route }) => {

  const { name, price, image, sugar, description, rating } = route.params

  return (
    <ScrollView className="">

      <View className="flex-row justify-between px-5 z-10 mt-8" style={{ zIndex: 1 }}>
        <View className="bg-white rounded-full p-2">
          <Ionicons name="chevron-back-outline" size={20} color="black" onPress={() => navigation.goBack()} />
        </View>

        <View className="bg-white rounded-full p-2">
          <FontAwesome5 name="heart" size={20} color="black" />
        </View>

      </View>

      <View className="-mt-20">
        <Image source={{ uri: image }} style={{ width: '100%', height: 500 }} />
        <View className=" rounded-t-3xl p-5 flex-row justify-between items-center" style={{ marginTop: -120, zIndex: 10 }}>
          <View >
            <Text className="text-2xl font-bold text-white">{name}</Text>
            {
              // sugar syntax for if condition
              sugar ? <Text className="text-gray-400 mt-2 mb-3">With Sugar</Text> : <Text className="text-gray-400 mt-2 mb-3">Without Sugar</Text>
            }
          </View>

          {/* star icons and rating */}
          <View className="flex-row items-center bg-[#C1925B] px-3 py-2 rounded-full">
            <FontAwesome6 name="star" size={20} color="#FFD700" />
            <Text className="text-white">{`  ${rating}`}</Text>
          </View>
        </View>
      </View>
      <View className="bg-white rounded-t-3xl p-5" style={{ marginTop: -20 }}>
        <Text className="text-2xl font-bold">{name}</Text>
        <Text className="text-gray-400 mt-2">${price}</Text>
        <Text className="text-gray-400 mt-2">{description}</Text>
      </View>

    </ScrollView>
  )
}

export default DetailsScreen