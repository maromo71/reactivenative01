import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './Header';

export default function Home() {
  const [contador, setContador] = useState(0);
  function incrementar(){
    setContador(contador + 1);
  }
  return (
    <>
      <Header title="Header Param" />
      <Header title="Header Param 2" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello World!!!</Text>
        <Text>{contador} toques!</Text>
        <TouchableOpacity style={styles.button} onPress={incrementar}>
          <Text>Pressione aqui!</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: 'white'
  },
  button:{
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
