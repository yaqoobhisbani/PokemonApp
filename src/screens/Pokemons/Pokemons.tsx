import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootNativeStackParams} from '../../navigation/RootNavigator';
import {useGetPokemonsQuery} from '../../api/pokemonApi';
import PokemonCard from './components/PokemonCard/PokemonCard';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';
import {getPokemonIdByUrl, getPokemonImageUrl} from '../../util/helpers';

type ScreenType = NativeStackScreenProps<RootNativeStackParams, 'Pokemons'>;

const Pokemons: React.FC<ScreenType> = ({navigation}) => {
  const {data, error, isLoading} = useGetPokemonsQuery();

  if (isLoading) return <Loader />;

  if (error) return <Error />;

  const renderItem = ({item}: {item: PokemonListItem}) => {
    const id = getPokemonIdByUrl(item.url);
    const imageUrl = getPokemonImageUrl(id);
    const onPress = () => navigation.navigate('PokemanDetails', {id});

    return <PokemonCard item={item} imageUrl={imageUrl} onPress={onPress} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data?.results}
        renderItem={renderItem}
        keyExtractor={item => item.url}
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {paddingHorizontal: 16, paddingTop: 16},
});

export default Pokemons;
