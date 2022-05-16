import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';

export default function Home() {
  const navigation = useNavigation()
  const [contador, setContador] = useState(0);
  function incrementar(){
    setContador(contador + 1);
  }
  return (
    <>
      <Header title="Título da Aplicação" />
      <View style={styles.container}>
        <Text style={styles.title}>Hello World!!!</Text>
        <Text>{contador} toques!</Text>
        <TouchableOpacity style={styles.button} onPress={incrementar}>
          <Text>Pressione aqui!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Form')}>
          <Text>Navegar</Text>
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
    width: 200,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
