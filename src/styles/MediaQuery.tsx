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
		acc[label] = (style: string) =>
			`@media (max-width: ${sizes[label] / 16}em) {${style}}`;
		return acc;
	},
	// eslint-disable-next-line @typescript-eslint/ban-types
	{} as { [index: string]: Function },
);
