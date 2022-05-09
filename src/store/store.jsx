import { configureStore, combineReducers } from '@reduxjs/toolkit';
import RegionsSlice from './slice/RegionsSlice';
import SettingsSlice from './slice/SettingsSlice';
import MinesSlice from './slice/MinesSlice';

const reducers = combineReducers({
    alarmStore: RegionsSlice,
    settingsStore: SettingsSlice,
    MinesSlice,
});

export const rootStore = configureStore({
    reducer: reducers,
});
