import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';
import { userService } from './service'
import { useEffect, useState } from 'react';

const App = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    (async () => {
      const githubUser = await userService.getUser('santanacostamarco')
      setUser(githubUser)
    })() 
  }, [])

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(user)}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default registerRootComponent(App);