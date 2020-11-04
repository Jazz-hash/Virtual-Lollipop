'use strict'

module.exports = {
  siteMetadata: {
    title: 'Vitual lolly',
    description: 'Vitual lolly',
    keywords: 'gatsbyjs, gatsby, javascript, vlolly',
    siteUrl: 'https://jazzel-lolly.netlify.app/',
    author: {
      name: 'Jazzel Mehmood',
      url: 'https://www.github.com/Jazz-hash',
      email: 'jazzelmehmood6@gmail.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'GCMS',
        // This is field under which it's accessible
        fieldName: 'get_lollies',
        // Url to query from
        url: 'https://jazzel-lolly.netlify.app/.netlify/functions/lolly'
      }
    }
  ]
}
