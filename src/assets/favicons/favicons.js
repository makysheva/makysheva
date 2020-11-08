const faviconsContext = require.context(
    '!!file-loader?name=favicons/[name].[ext]!.',
    true,
    /favicons\/[^/]+\.(svg|png|ico|xml|webmanifest)$/
);

faviconsContext.keys().forEach(faviconsContext);