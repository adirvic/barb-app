import React from 'react';

export class BarbeiroScreen extends React.Component {
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
      <Text style={styles.titleTextBlack}>SELECIONE O BARBEIRO</Text>

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={require('./barbeiro.jpg')}
          style={{ width: 400, height: 400 }}
        />

        <Text style={styles.titleTextBlack}> . . . </Text>
        <Button
          title="Selecionar"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Atendimento');
          }}
        />
        </View>
      </View>
    );
  }
}
