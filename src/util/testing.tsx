import {configureStore} from '@reduxjs/toolkit';
import {pokemonApi} from '../api/pokemonApi';
import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';

export const renderWithProviders = (ui: React.ReactElement) => {
  const store = configureStore({
    reducer: {
      [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(pokemonApi.middleware),
  });

  return render(<Provider store={store}>{ui}</Provider>);
};
