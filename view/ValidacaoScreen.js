import React from 'react';

export class ValidacaoScreen extends React.Component {
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
      <Text>VOCÊ SELECIONOU</Text>
      <Text>DIA 1 DE MARÇO ÀS 14:00</Text>
      <Text>DESEJA CONFIRMAR?</Text>

      <Button
        title="Sim"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          this.props.navigation.navigate('Confirmacao');
        }}
      />

      <Button
        title="Não"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          this.props.navigation.navigate('Home');
        }}
      />

      </View>
    );
  }
}
