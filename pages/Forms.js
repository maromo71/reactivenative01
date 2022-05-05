import React from 'react';
import { StyleSheet, Text, View } from 'react-native-web'; 'react-native';
import Header from './Header';

function Form(){
    return(<>
        <Header title="Cadastro">
            <View style={styles.container}>
                <Text>Teremos um formulário aqui!!!</Text>
            </View>
        </Header>
    </>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItens: 'center',
        justifyContent: 'center'
    }
});

export default Form;
