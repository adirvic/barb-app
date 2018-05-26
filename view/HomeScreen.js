import React from 'react';
import { Image,
  View,
  Text,
  TextInput,
  ImageBackground } from 'react-native';
import { createStackNavigator  } from 'react-navigation'; // Version can be specified in package.json
import { Button } from 'react-native-elements';
import { styles } from '../Styles/Root'

export class HomeScreen extends React.Component {

  render() {
    return (

        <ImageBackground
        source={require('../img/fundo3.jpg')}
        style={{
          flex:1,
          width: '100%',
          height:'100%',
          // alignItems: 'center',
          // justifyContent: 'center'
        }}
        >


        <Text style={styles.titleTextWhite}>NOME:</Text>
        <TextInput style={styles.inputTextWhite} />
        <Text style={styles.titleTextWhite}>NÚMERO:</Text>
        <TextInput style={styles.inputTextWhite} />

        <Button
          title='Acessar'
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              // otherParam: 'Seus últimos cortes',
            });
          }}
        />

        </ImageBackground>

    );
  }
}
