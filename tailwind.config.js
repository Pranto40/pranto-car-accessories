module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          mytheme: {
            "primary": "#ffd54c",
            "secondary": "#D926A9",
            "accent": "#ffd54c",
            "neutral": "#191D24",
            "base-100": "#2A303C",
            "info": "#3ABFF8",
            "success": "#36D399",
            "warning": "#FBBD23",
            "error": "#F87272",
          },
        },
      ],
    },
  },
  plugins: [require("daisyui")],
}
