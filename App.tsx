import React, { useEffect, useState } from "react";
import { Image, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import customStyles from "./styles/customStyles";

interface Props {
  title: string
}

export const Button = ({ title }: Props) => {
  return (
    <Pressable onPress={() => alert('Pressed')} style={{ padding: 15, backgroundColor: 'green', width: 100 }}>
      <Text style={{ color: '#fff', fontWeight: "500" }}>{title}</Text>
    </Pressable>
  )
}

const App = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);


  return (
    <SafeAreaView style={customStyles.AndroidSafeArea}>
      <View style={{ height: 60, backgroundColor: 'blue' }}>
        <Text>StackOverFlow</Text>
      </View>
      <View style={{ height: 60, backgroundColor: 'green' }}>
        <Text>StackOverFlow</Text>
      </View>
      <Button title="Press Now" />
      <ScrollView style={{ marginTop: 50, marginLeft: 40 }}>
        <View>
          {/* for local image */}
          <Image source={require('./assets/favicon.png')} style={styles.imgStyle} />
          {/* for online url */}
        </View>
        <View>
          <Image source={{ uri: "https://th.bing.com/th/id/OIP.ewQ01WGeLzMa22dxsZly7gHaFX?pid=ImgDet&rs=1" }} style={styles.imgStyle} />
        </View>
        <Button title="Press Now" />
        <View>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    height: 180,
    width: 200,
    resizeMode: 'contain'
  }
});

export default App;