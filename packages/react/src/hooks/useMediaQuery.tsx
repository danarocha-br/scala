import { createMedia } from '@artsy/fresnel';

const CompassoMediaConfig = createMedia({
  breakpoints: {
    sm: 0,
    md: 900,
    lg: 1200,
    xl: 1600,
  },
});

export const mediaStyle = CompassoMediaConfig.createMediaStyle();
export const { Media, MediaContextProvider } = CompassoMediaConfig;
