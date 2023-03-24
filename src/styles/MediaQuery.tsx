type MediaQueryProps = {
    mobile: number;
    tablet: number;
    tabletLarge: number;
    desktop: number;
  };
  
  const sizes: MediaQueryProps = {
    mobile: 576,
    tablet: 768,
    tabletLarge: 1024,
    desktop: 1440,
  };
  
  export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
    (acc, label) => {
      acc[label] = (style: String) =>
        `@media (max-width: ${sizes[label] / 16}em) {${style}}`;
      return acc;
    },
    {} as { [index: string]: Function }
  );
  