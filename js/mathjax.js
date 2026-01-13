// MathJax v2 config
(function () {
  window.MathJax = {
    tex2jax: {
      inlineMath: [["\\(", "\\)"]],
      displayMath: [["\\[", "\\]"]],
      processEscapes: true,
      processEnvironments: true
    },
    TeX: {
      // \textcolor 등 색상
      extensions: ["color.js"]
    },
  };
})();