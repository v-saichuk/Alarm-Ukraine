import { DEFAULT_COLOR, WARNING_COLOR, ACTIVE_FONT } from '../variables';

export const useRegionColor = (region) => (region ? WARNING_COLOR : DEFAULT_COLOR);
export const useDistrictColor = (district) => (district ? WARNING_COLOR : '');
export const useActiveFontColor = (region) => (region ? ACTIVE_FONT : '');
