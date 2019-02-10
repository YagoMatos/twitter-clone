import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../services/api';

export default class Timeline extends Component {
    static navigationOptions = {
        title: 'Início',
        headerRight: (
            <TouchableOpacity onPress={() => {}}>
                <Icon 
                    name="add-circle-outline"
                    size={24}
                    color="#4BB0EE"
                    style={{ marginRight: 20 }}
                />
            </TouchableOpacity>
        ),
    };

    state = {
        tweets: [],
    }

    async componentDidMount() {
        const response = await api.get('tweets');

        this.setState({ tweets: response.data });
    }

  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    }
  });
  