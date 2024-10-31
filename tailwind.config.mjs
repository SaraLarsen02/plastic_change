/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": `radial-gradient(circle at 94.35% 89.61%, #1B47A5 0%, 20%, rgba(27, 71, 165, 0) 40%),
                               radial-gradient(circle at 6.50% 88.03%, #112C56 0%, 25%, rgba(17, 44, 86, 0) 50%),
                               radial-gradient(circle at 17.67% 46.71%, #1B47A5 0%, 42%, rgba(27, 71, 165, 0) 70%),
                               radial-gradient(circle at 93.68% 11.42%, #112C56 0%, 42%, rgba(17, 44, 86, 0) 70%),
                               radial-gradient(circle at 48.90% 49.52%, #000000 0%, 100%, rgba(0, 0, 0, 0) 100%)`,
      },
      cursor: {
        handcursor: "url(public/curser.png) 25 25, pointer",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries")],
};
