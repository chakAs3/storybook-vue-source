
import "tailwindcss/tailwind.css";
import "../src/colors.css";
import "../src/font.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs:{
    source: { excludeDecorators: true }
  }
}