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
      backgroundImage: {
        radial: "url('/home/bg-radial.png')",
        radial2: "url('/home/bg-radial-and-img.png')",
        gradient: "url('/home/bg-gradient.png')",
        banner: "url('/home/banner.png')",
        banner2: "url('/home/estetoscopio.png')",
        bannerSobre: "url('/sobre/banner.png')",
        radialSobre: "url('/sobre/radialSobre.png')",
        logoTopSobre: "url('/sobre/logo-top-banner.png')",
        logoBottomSobre: "url('/sobre/logo-bottom-banner.png')",
        bannerEspecialidades: "url('/especialidades/banner.png')",
        gradientEspecialidades: "url('/especialidades/gradient.png')",
        bannerSectionEspecialidades:
          "url('/especialidades/banner-section.png')",
        line: "url('/line.png')",
      },

      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '2rem',
        },
      },
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
