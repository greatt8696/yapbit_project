/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, ts,tsx}"],
  theme: {
    extend: {
      ///내가 원하는 색상을 지정
      colors: {
        "type-one-blue": "#4158D0",
        "type-one-puple": "#C850C0",
        "type-one-yellow": "#FFCC70",
        "type-two-blue": "#12c2e9",
        "type-two-puple": "#c471ed",
        "type-two-pink": "#f64f59",
        "type-three-pink": "#FA8BFF",
        "type-three-blue": "#2BD2FF",
        "type-three-green": "#2BFF88",
        "pastel-purple": "#E0C3FC",
        "pastel-blue": "#8EC5FC",
        "pastel-green-blue": "#97D9E1",
        "type-lime-light": "#FFFB7D",
        "type-lime-normal": "#85FFBD",

        "theme-one-to": "#FBAB7E",
        "theme-one-from": "#F7CE68",
        "theme-two-to": "#FAD961",
        "theme-two-from": "#F76B1C",
        "theme-one-from": "#F7CE68",
        "theme-three-to": "#F7971E",
        "theme-three-from": "#FFD200",
      },
      //내가 원하는 blur 픽셀 지정
      blur: {},

      //내가 원하는 animation-설정 지정
      animation: {
        wiggle: "wiggle 0.2s ease-in-out infinite",
        "bounce-short": "bounce 0.2s ease-in-out infinite",
        "bounce-short": "bounce 0.2s ease-in-out infinite",
        "wiggle-once": "wiggle 0.4s ease-in-out 1",
        "blink-green": "blink-green 0.4s ease-in-out 1",
        "blink-red": "blink-red 0.4s ease-in-out 1",
        "blink-text-green": "blink-text-green 0.4s ease-in-out 1",
        "blink-text-red": "blink-text-red 0.4s ease-in-out 1",
      },

      // 내가 원하는 animation-keyframes 지정
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "blink-green": {
          "0%, 100%": {
            "background-color": "transparent",
            transform: "rotate(-3deg)",
          },
          "50%": { "background-color": "#228B22", transform: "rotate(3deg)" },
        },
        "blink-red": {
          "0%, 100%": {
            "background-color": "transparent",
            transform: "rotate(-3deg)",
          },
          "50%": { "background-color": "#B22222" },
        },

        "blink-text-green": {
          "0%, 100%": { "color": "white" , transform: "scale(1)"},
          "50%": { "color": "#228B22" , transform: "scale(1.2)"},
        },
        "blink-text-red": {
          "0%, 100%": { "color": "white", transform: "scale(1)" },
          "50%": { "color": "#B22222", transform: "scale(1.2)" },
        },
      },
    },
  },
  plugins: [],
};
