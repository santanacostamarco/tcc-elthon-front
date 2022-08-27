import * as React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { testApi } from './service/ping'
import { useEffect, useState } from 'react'

export default function App() {
  const [ping, setPing] = useState(null)
  useEffect(() => {
    ;(async () => {
      const response = await testApi()
      setPing(response)
    })()
  }, [])
  return (
    <View style={styles.container}>
      <Text>O Marco é meu melhor amigo</Text>
      <Text>{ping}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
