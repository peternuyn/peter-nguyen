import { join } from 'path';

/** @type {import('tailwindcss').Config} */
export default {
  class: 'daisyui',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
  ],
  theme: {
    extend: {
      animationDelay: {
        2000: '2s',
        4000: '4s',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "synthwave"], // Add "synthwave" theme to the list
  },
}

