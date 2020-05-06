module.exports = {
  extends: [
    '@hello10/eslint-config',
    'plugin:react/recommended'
  ],
  globals: {
    window: true,
    document: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
