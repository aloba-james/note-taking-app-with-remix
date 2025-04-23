module.exports = {
  appDirectory: "app",         // This is where your app code will live
  serverBuildPath: "build/index.js",  // Path to the server build file
  serverModuleFormat: "cjs",   // Use CommonJS format for the server
  ignoredRouteFiles: ["**/.*"], // Ignore dotfiles
  // You can add custom webpack configuration if needed
  future: {
    v2_errorBoundary: false,    // Enable future features
  },
};
