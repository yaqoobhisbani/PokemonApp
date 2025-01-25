import {View, ActivityIndicator, StyleSheet} from 'react-native';
import React from 'react';

const Loader: React.FC = () => {
  return (
    <View style={styles.container} testID="loader">
      <ActivityIndicator size="large" color="#444" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Loader;
