import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistCombineReducers} from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';
import {pokemonApi} from '../api/pokemonApi';

// Persist configuration
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [pokemonApi.reducerPath],
};

const rootReducer = persistCombineReducers(persistConfig, {
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

// Configure store
export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      pokemonApi.middleware,
    ),
});

// Persistor
export const persistor = persistStore(store);

setupListeners(store.dispatch);
