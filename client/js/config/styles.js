import { Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

// Colours
export const colors = {
  neutralLight: '#f7ebec', // light grey
  neutralDark: '#404e5c', // med grey
  primary: '#e3170a', // red
  primaryLight: '#ff5a39',
  primaryDark: '#a80000',
  primaryText: '#fafafa'
};

// Spacing
export const margin = {
  xxs: 3,
  xs: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const padding = {
  xxxs: 2,
  xxs: 6,
  xs: 10,
  sm: 15,
  md: 20,
  lg: 30,
  xl: 40
};

// Typography
export const fonts = {
  xxxs: 9,
  xxs: 12,
  xs: 14,
  sm: 16,
  md: 18,
  lg: 26,
  xl: 34,
  xxl: 46,
  // bold: '600',
  primary: 'OpenSans-Regular'
  // primaryBold: 'OpenSans-Bold',
  // primarySemi: 'OpenSans-SemiBold',
  // secondary: 'Franchise Free'
};

export const capitalize = { textTransform: 'capitalize' };

export const uppercase = { textTransform: 'uppercase' };

// layout
export const center = { justifyContent: 'center', alignItems: 'center' };

export const row = { flexDirection: 'row' };

export const jusBtwn = { justifyContent: 'space-between' };

export const jusArnd = { justifyContent: 'space-around' };

export const jusStrt = { justifyContent: 'flex-start' };

export const jusCntr = { justifyContent: 'center' };

export const jusCenterRow = {
  ...row,
  ...jusCntr
};

export const jusBtwnRow = {
  ...row,
  ...jusBtwn
};

export const iteCntr = { alignItems: 'center' };

export const iteStrt = { alignItems: 'flex-start' };

export const iteCenterRow = {
  ...row,
  ...iteCntr
};

export const container = {
  backgroundColor: colors.neutralLight,
  flex: 1,
  ...center
};
