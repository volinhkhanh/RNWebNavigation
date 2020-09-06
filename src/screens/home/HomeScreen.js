import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'

export const HomeScreen = (props) => {
  return(
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>
          HOME
        </Text>
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
});
