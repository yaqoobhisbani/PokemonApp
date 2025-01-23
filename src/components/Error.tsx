import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Error: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Something went wrong!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  errorText: {color: 'red', fontSize: 16, fontWeight: '500'},
});

export default Error;
