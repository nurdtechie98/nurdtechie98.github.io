module.exports = {
  siteMetadata: {
    title: "Chirag Shetty | nurdtechie98",
    author: "Chirag Shetty",
    description: "The space in the internet belonging to chirag shetty",
    url: "https://nurdtechie98.github.io", // No trailing slash allowed!
    image: "/images/cutmypic.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@chiragshetty98",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'chirag shetty | nurdtechie98',
        short_name: 'nurdtechie98',
        start_url: '/',
        background_color: '#000000',
        theme_color: '#000000',
        display: 'minimal-ui',
        icon: 'src/images/cutmypic.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
