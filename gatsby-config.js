module.exports = {
	siteMetadata: {
		title: `Jane | Front-end Developer`,
		description: `	I am a self taught front end developer, who enjoys coding cool websites and making them user friendly and easy to navigate. User Expericence is important in what I design and code.`,
		author: `Jane Tracy Muchiri`,
		siteUrl: 'https://janetracy.com',
		social: {
			twitter: 'TracyCss',
			linkedin: 'janetracymuthoni',
			github: 'janetracymuthoni',
			devto: 'tracycss',
			email: 'muchirijane@outlook.com'
		}
		// name of the image for social website share, should be in static folder
		//imageShare: `share.jpg`
	},
	plugins: [
		'gatsby-plugin-dark-mode',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-158055356-1'
			}
		},
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [ `gatsby-remark-prismjs` ]
			}
		},
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [ `.mdx`, `.md` ]
			}
		},
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/images/`
			},
			__key: 'images'
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/src/pages/`
			},
			__key: 'pages'
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts/`
			}
		},
		{
			resolve: 'gatsby-plugin-page-creator',
			options: {
				path: `${__dirname}/src/posts`
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Jane Tracy Muchiri`,
				short_name: `Jane Tracy`,
				start_url: `/`,
				background_color: `#1B1B29`,
				theme_color: `#EAEAEA`,
				display: `minimal-ui`,
				icon: `src/images/Logo.svg`,
				legacy: true
			}
		}
	]
};
