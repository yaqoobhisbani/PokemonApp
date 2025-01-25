import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useGetPokemonByIdQuery} from '../../api/pokemonApi';
import Chip from '../../components/Chip/Chip';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import {STRINGS} from '../../constants/strings';

type ScreenType = NativeStackScreenProps<
  RootNativeStackParams,
  'PokemanDetails'
>;

const PokemonDetails: React.FC<ScreenType> = ({route}) => {
  const id = route.params.id;
  const {data, error, isLoading} = useGetPokemonByIdQuery(id);

  if (isLoading) return <Loader />;

  if (error) return <Error />;

  return (
    <ScrollView contentContainerStyle={styles.contentContaienr}>
      <Image
        source={{uri: data?.sprites.other['official-artwork'].front_default}}
        style={styles.photo}
      />

      <View style={styles.row}>
        <Text style={styles.label}>{STRINGS.NAME_LABEL}</Text>
        <Text>{data?.name}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>{STRINGS.HEIGHT_LABEL}:</Text>
        <Text>{data?.height}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>{STRINGS.WEIGHT_LABEL}</Text>
        <Text>{data?.weight}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>{STRINGS.TYPES_LABEL}</Text>
        <View style={styles.typesContainer}>
          {data?.types.map(item => (
            <Chip label={item.type.name} key={item.type.name} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContaienr: {
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: 'white',
    flex: 1,
  },
  photo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  label: {fontWeight: '600', fontSize: 16},
  value: {fontSize: 16},
  typesContainer: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
  },
});

export default PokemonDetails;
