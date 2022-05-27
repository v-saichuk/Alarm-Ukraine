import { createSlice } from '@reduxjs/toolkit';

const SettingsSlice = createSlice({
    name: 'settings',
    initialState: {
        isActiveFullScreen: false,
        themeColor: true, // Black = true, White = false
    },
    reducers: {
        handleFullScreen: (state) => {
            state.isActiveFullScreen = !state.isActiveFullScreen;
        },
        onThemeColor: (state) => {
            state.themeColor = !state.themeColor;
            console.log('click');
        },
    },
});

export default SettingsSlice.reducer;
export const { handleFullScreen, onThemeColor } = SettingsSlice.actions;
