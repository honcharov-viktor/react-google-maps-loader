// eslint-disable-next-line
module.exports = require("babel-jest").createTransformer({
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-object-rest-spread"],
})
