export default {
	target: 'static',
	srcDir: 'src',
	components: true,
	buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
	modules: ['@nuxt/content'],
	head: {
		meta: [
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
		],
	},
	googleFonts: {
		families: {
			Inter: [400, 600, 700],
		},
	},
}
