import React, { useEffect, useState } from "react";
import { Image, Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import customStyles from "./styles/customStyles";
import { spacing } from "./theme/spacing";

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
      {/* <View style={{ height: 60, backgroundColor: 'blue' }}>
        <Text>StackOverFlow</Text>
      </View>
      <View style={{ height: 60, backgroundColor: 'green' }}>
        <Text>StackOverFlow</Text>
      </View>
      <Button title="Press Now" /> */}
      {/* <ScrollView style={{ marginTop: 50, marginLeft: 40 }}> */}
      {/* <View>
          for local image
          <Image source={require('./assets/favicon.png')} style={styles.imgStyle} />
          for online url
        </View> */}
      {/* <View>
          <Image source={{ uri: "https://th.bing.com/th/id/OIP.ewQ01WGeLzMa22dxsZly7gHaFX?pid=ImgDet&rs=1" }} style={styles.imgStyle} />
        </View>
        <Button title="Press Now" />
        <View>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </View> */}
      {/* </ScrollView> */}

      {/* #====Flex Items ====#*/}
      {/* Default flex */}
      <View style={{ flex: 1}}>
        <View style={styles.view1}></View>
        <View style={styles.view2}></View>
        <View style={styles.view3}></View>
      </View>

      {/* Customized flex */}
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: spacing[5], alignItems: 'center' }}>
        <View style={styles.view4}></View>
        <View style={styles.view5}></View>
        <View style={styles.view6}></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    height: 180,
    width: 200,
    resizeMode: 'contain'
  },
  view1: {
    flex: 1,
    backgroundColor: 'blue',
  },
  view2: {
    flex: 3,
    backgroundColor: 'green'
  },
  view3: {
    flex: 1,
    backgroundColor: 'gray'
  },
  view4: {
    backgroundColor: 'blue',
    height: 100,
    width: 100
  },
  view5: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
    // alignSelf: 'flex-start'
  },
  view6: {
    backgroundColor: 'gray',
    height: 100,
    width: 100
  }
});

export default App;