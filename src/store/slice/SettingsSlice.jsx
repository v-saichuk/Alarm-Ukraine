import { createSlice } from '@reduxjs/toolkit';

const SettingsSlice = createSlice({
    name: 'settings',
    initialState: {
        isActiveFullScreen: false,
        isActiveMinins: true,
    },
    reducers: {
        handleFullScreen: (state, action) => {
            state.isActiveFullScreen = action.payload;
        },
        handleMinins: (state, action) => {
            state.isActiveMinins = action.payload;
        },
    },
});

export default SettingsSlice.reducer;
export const { handleFullScreen, handleMinins } = SettingsSlice.actions;
