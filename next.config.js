module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    compiler: {
      styledComponents: true,
    },
  },
  compiler: {
    styledComponents: true,
  },
};
