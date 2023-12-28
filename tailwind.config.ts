import { colors, typography } from './src/tokens'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },

    colors: { ...colors, current: 'currentColor' },
    fontWeight: typography.fontWeights,
    fontSize: typography.fontSizes,
    lineHeight: typography.lineHeights,
    fontFamily: {
      inter: `var(${typography.fontFamilies.inter})`,
      merriweather: `var(${typography.fontFamilies.merriweather})`,
      lato: `var(${typography.fontFamilies.lato})`,
      source: `var(${typography.fontFamilies.source})`,
    },
  },

  plugins: [],
}
export default config
