type MediaQueryProps = {
    mobile: number;
    tablet: number;
    tabletLarge: number;
    labtop: number;
  };
  
  const sizes: MediaQueryProps = {
    mobile: 480,
    tablet: 768,
    tabletLarge: 1024,
    labtop: 1280,
  };
  
  export const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
    (acc, label) => {
      acc[label] = (style: String) =>
        `@media (max-width: ${sizes[label] / 16}em) {${style}}`;
      return acc;
    },
    {} as { [index: string]: Function }
  );
  