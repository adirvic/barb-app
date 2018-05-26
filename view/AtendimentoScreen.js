import React from 'react';

export class AtendimentoScreen extends React.Component {
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
            <Picker
              selectedValue='Maio'
              style={{ height: 50, width: 200 }}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label="Janeiro" value="1" />
              <Picker.Item label="Fevereiro" value="2" />
              <Picker.Item label="Março" value="3" />
              <Picker.Item label="Abril" value="4" />
              <Picker.Item label="Maio" value="5" />
              <Picker.Item label="Junho" value="6" />
              <Picker.Item label="Julho" value="7" />
              <Picker.Item label="Agosto" value="8" />
              <Picker.Item label="Setembro" value="9" />
              <Picker.Item label="Outubro" value="10" />
              <Picker.Item label="Novembro" value="11" />
              <Picker.Item label="Dezembro" value="12" />
            </Picker>
            <Picker
              // selectedValue={this.state.language}
              style={{ height: 50, width: 200 }}
              onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
              <Picker.Item label="2018" value="2018" />
              <Picker.Item label="2019" value="2019" />
            </Picker>
            <Button
              title="Selecionar"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('AtendimentoDia');
              }}
            />

          </View>
        </View>
    );
  }

}
