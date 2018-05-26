import React from 'react';

export class AtendimentoHoraScreen extends React.Component {
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
      <Text style={styles.titleTextBlack}>SELECIONE  A HORA</Text>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


        <FlatList
          data={[{key:'08:00'}, {key: '08:30'},
          {key: '09:00'}, {key: '09:30'},
          {key: '10:00'}, {key: '10:30'},
          {key: '11:00'}, {key: '11:30'},
          {key: '13:00'}, {key: '12:30'}]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

        <Button
          title="Selecionar"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Validacao');
          }}
        />

        </View>
      </View>
    );
  }
}
