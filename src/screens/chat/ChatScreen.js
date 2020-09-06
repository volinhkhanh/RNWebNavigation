import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export const ChatScreen = (props) => {
  const { navigation } = props
  return(
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>
          CHAT
        </Text>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.pop()}>
          <Text>
            BACK
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginTop: 20,
    backgroundColor: '#ccc',
    padding: 10,
  },
});
