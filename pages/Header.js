import react from "react";
import {StyleSheet, Text, View } from "react-native";

function Header(props){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: '#000',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: '800',
        color: 'gray'
    }
  });
  
export default Header;