class ConfirmacaoScreen extends React.Component {
  // static navigationOptions = ({ navigation, navigationOptions }) => {
  //   const { params } = navigation.state;
  //
  //   return {
  //     title: params ? params.otherParam : 'Confirmado',
  //     /* These values are used instead of the shared configuration! */
  //     headerStyle: {
  //       backgroundColor: navigationOptions.headerTintColor,
  //     },
  //     headerTintColor: navigationOptions.headerStyle.backgroundColor,
  //   };
  // };


  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('Deseja sair ?!')}
        title="LogOut 123"
        color="#000"
      />
    ),
  };
  render() {
    // /* 2. Read the params from the navigation state */
    // const { params } = this.props.navigation.state;
    // const itemId = params ? params.itemId : null;
    // const otherParam = params ? params.otherParam : null;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>vlw</Text>
      <Button
        title="INICIO"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          this.props.navigation.navigate('Home');
        }}
      />

      </View>
    );
  }

}
