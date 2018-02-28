import babel from "rollup-plugin-babel";
import uglify from "rollup-plugin-uglify";

const env = process.env.NODE_ENV;
const config = {
  input: "src/index.js",
  plugins: []
};

if (env === "es" || env === "cjs") {
  config.output = { format: env };
  config.external = ["url"];
  config.plugins.push(
    babel({
      plugins: []
    }),
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  );
}

export default config;
