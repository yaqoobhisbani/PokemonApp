import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Pokemons from '../screens/Pokemons/Pokemons';
import PokemonDetails from '../screens/PokemonDetails/PokemonDetails';

export type RootNativeStackParams = {
  Pokemons: undefined;
  PokemanDetails: {id: string};
};

const Stack = createNativeStackNavigator<RootNativeStackParams>();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokemons" component={Pokemons} />
      <Stack.Screen
        name="PokemanDetails"
        component={PokemonDetails}
        options={{headerTitle: 'Pokemon Details'}}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
