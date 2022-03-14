import React from "react";
import { Text, View, FlatList, Image, StyleSheet } from 'react-native'


export default class Listado extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
      url: 'https://reqres.in/api/users/'
    }
  }
  componentDidMount() {
    this.getUsuarios();
  }
  getUsuarios = () => {
    this.setState({ loading: true })

    fetch(this.state.url)
      .then(res => res.json())
      .then(res => {

        this.setState({
          usuarios: res.data,
        })
      });
  };
  render() {
    return (
      <View>

        <FlatList

          data={this.state.usuarios}
          renderItem={
            ({ item }) =>
              <Text style={styles.container}>
              {"\n"}{item.id} {item.first_name} {item.last_name}</Text>
          }
        />
      </View>
    );


  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
  }
})
