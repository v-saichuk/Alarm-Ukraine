import { DEFAULT_COLOR, WARNING_COLOR, ACTIVE_FONT, DEFAULT_COLOR_WHITE } from '../variables';
import { useSelector } from 'react-redux';

export const useRegionColor = (region) => {
    const { themeColor } = useSelector((state) => state.settingsStore);

    return region ? WARNING_COLOR : themeColor ? DEFAULT_COLOR : DEFAULT_COLOR_WHITE;
};
export const useDistrictColor = (district) => (district ? WARNING_COLOR : '');
export const useActiveFontColor = (region) => (region ? ACTIVE_FONT : '');
