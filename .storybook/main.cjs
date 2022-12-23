const path = require('path');
module.exports = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/vue3-vite",
    "options": {}
  },
  "docs": {
    enabled: true,
    defaultName: '----Docs----',
    //👇 Use only one of the following options to auto-generate documentation
    autodocs: 'tag',
  }
}