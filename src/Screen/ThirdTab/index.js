import React from 'react';
import { View, Text, Button } from 'react-native';

export default class ThirdTab extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Third Tab</Text>
      </View>
    );
  }
}
