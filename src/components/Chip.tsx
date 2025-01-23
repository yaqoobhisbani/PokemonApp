import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  label: string;
};

const Chip: React.FC<Props> = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: '#eee',
    borderRadius: 500,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  label: {fontSize: 12},
});

export default Chip;
