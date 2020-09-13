module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/views/*.vue',
  ],
  theme: {
    extend: {},
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  variants: {},
  plugins: [],
};
