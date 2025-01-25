import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {STRINGS} from '../../constants/strings';

const Error: React.FC = () => {
  return (
    <View style={styles.container} testID="error">
      <Text
        role="alert"
        accessible
        accessibilityLabel={STRINGS.SOMETHING_WENT_WRONG}
        style={styles.errorText}>
        {STRINGS.SOMETHING_WENT_WRONG}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  errorText: {color: 'red', fontSize: 16, fontWeight: '500'},
});

export default Error;
