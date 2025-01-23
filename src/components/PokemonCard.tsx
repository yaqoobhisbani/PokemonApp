import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

type Props = {
  item: PokemonListItem;
  imageUrl: string;
  onPress: () => void;
};

const PokemonCard: React.FC<Props> = ({item, imageUrl, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {width: 48, height: 48, resizeMode: 'contain'},
  name: {fontSize: 16, fontWeight: '500', marginLeft: 16},
});

export default PokemonCard;
