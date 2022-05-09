import { createSlice } from '@reduxjs/toolkit';

const SettingsSlice = createSlice({
    name: 'settings',
    initialState: {
        isActiveFullScreen: false,
    },
    reducers: {
        handleFullScreen: (state, action) => {
            state.isActiveFullScreen = action.payload;
        },
    },
});

export default SettingsSlice.reducer;
export const { handleFullScreen } = SettingsSlice.actions;
