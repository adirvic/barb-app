import React from 'react';

export class AtendimentoDiaScreen extends React.Component {

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
        <Text style={styles.titleTextBlack}>SELECIONE  A DATA</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>



          <Button
            title="Selecionar"
            onPress={() => {
              /* 1. Navigate to the Details route with params */
              this.props.navigation.navigate('AtendimentoHora');
            }}
          />

        </View>
      </View>
    );
  }
}
