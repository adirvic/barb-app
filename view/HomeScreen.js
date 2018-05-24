import React from 'react';
import { Image,
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  Picker,
  FlatList } from 'react-native';
import { createStackNavigator  } from 'react-navigation'; // Version can be specified in package.json
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { LogoTitle } from './LogoTitle'
import { Styles } from '../Styles/Root'

export class HomeScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('Deseja sair ?!')}
        title="LogOut"
        color="#000"
      />
    ),
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground
        source={require('../img/fundo3.jpg')}
        style={{
          width: 420,
          height:670,
          alignItems: 'center',
          justifyContent: 'center'
        }}>


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
      </View>
    );
  }
}

// const RootStack = createStackNavigator (
//   {
//     Home:  HomeScreen,
//     Details: DetailsScreen,
//     NovoCorte: NovoCorteScreen,
//     Barbeiro: BarbeiroScreen,
//     Atendimento: AtendimentoScreen,
//     AtendimentoDia: AtendimentoDiaScreen,
//     AtendimentoHora: AtendimentoHoraScreen,
//     Validacao: ValidacaoScreen,
//     Confirmacao: ConfirmacaoScreen,
//   },
//   {
//     initialRouteName: 'Home',
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: 'black',
//       },
//       headerTintColor: '#FFF',
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//     },
//   }
// );
//
//
// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }
