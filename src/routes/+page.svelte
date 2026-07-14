<script>
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Education from './Education.svelte';
	import Experience from './Experience.svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';
	import { ThemeToggle } from '$lib/components';

	const year = new Date().getFullYear();
	const copyright = `© ${year} Gabe Hargrave`;

	const siteUrl = 'https://gargrave.dev/';
	const title = 'Gabe Hargrave | Software Engineer';
	const description =
		'Gabe Hargrave is a software engineer building web and product experiences with TypeScript, React, and SvelteKit. Portfolio, experience, projects, and contact info.';

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Gabe Hargrave',
		jobTitle: 'Software Engineer',
		url: siteUrl,
		sameAs: ['https://github.com/gargrave', 'https://www.linkedin.com/in/gabe-hargrave-264322133']
	};
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={siteUrl} />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Gabe Hargrave" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<!-- TODO: add og:image (1200x630) once designed -->

	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</` + `script>`}
</svelte:head>

<div class="mainContent">
	<a class="skipLink" href="#main-content">Skip to content</a>
	<header>
		<h1>Gabe Hargrave <small>Software Engineer</small></h1>
		<ThemeToggle />
	</header>
	<hr />

	<main id="main-content" tabindex="-1">
		<About />
		<Contact />
		<hr />
		<Skills />
		<hr />
		<Experience />
		<hr />
		<Education />
		<hr />
		<Projects />
	</main>

	<footer>
		{copyright}
	</footer>
</div>

<style lang="scss">
	@use '../lib/mixins';

	:global(:root) {
		--bg-color: #fbfbfb;
		--text-color: #242424;
		--text-color-muted: #5f5f5f;
		--divider-color: #b3b3b3;
		--link-color: #1a5fb4;
		--content-bg: rgba(255, 255, 255, 0.35);
		--content-border: rgba(0, 0, 0, 0.1);
		--card-bg: #fefefe;
		--card-border: #ccc;
		--card-header-bg: #dcdcdc;
		--card-header-text: #464646;
		--card-shadow: rgba(0, 0, 0, 0.07);
	}

	:global(:root[data-theme='dark']) {
		--bg-color: #161616;
		--text-color: #e8e8e8;
		--text-color-muted: #a2a2a2;
		--divider-color: #3a3a3a;
		--link-color: #7ab0ff;
		--content-bg: rgba(255, 255, 255, 0.03);
		--content-border: rgba(255, 255, 255, 0.08);
		--card-bg: #1e1e1e;
		--card-border: #333;
		--card-header-bg: #262626;
		--card-header-text: #cfcfcf;
		--card-shadow: rgba(0, 0, 0, 0.4);
	}

	:global(body) {
		background-color: var(--bg-color);
		color: var(--text-color);
		font-family: 'Lato', sans-serif !important;
		font-size: 16px;
		margin: 0;
		padding: 0;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		transition:
			background-color 0.2s ease,
			color 0.2s ease;
	}

	:global(:root[data-theme='dark'] body) {
		background-image: none;
	}

	:global(a) {
		color: var(--link-color);
	}

	// Consistent, always-visible focus indicator for keyboard users
	// (links otherwise fall back to the thin UA default, easy to lose over
	// the patterned background).
	:global(a:focus-visible),
	:global(button:focus-visible) {
		border-radius: 2px;
		outline: 2px solid var(--link-color);
		outline-offset: 2px;
	}

	// Programmatic focus target for the skip link; don't show an outline when
	// focused via the skip link (it's a scroll target, not an interactive control).
	main:focus {
		outline: none;
	}

	:global(p) {
		line-height: 1.5rem;
	}

	:global(ul) {
		@include mixins.sm {
			padding-left: 1rem;
		}

		line-height: 1.6rem;
	}

	:global(li) {
		line-height: 1.6rem;
	}

	:global(hr) {
		border: 0;
		border-bottom: 1px dotted var(--divider-color);
		margin: 1.5rem 0 1rem 0;
	}

	header {
		align-items: center;
		display: flex;
		gap: 12px;
		justify-content: space-between;
	}

	header h1 {
		align-items: baseline;
		display: flex;
		flex-direction: column;
		font-weight: normal;
		font-size: 2.5rem;
		margin: 0;

		small {
			color: var(--text-color-muted);
			font-size: 1.25rem;
		}

		@include mixins.lg {
			flex-direction: row;
			grid-gap: 8px;
			margin: inherit;
		}
	}

	footer {
		color: var(--text-color-muted);
		font-size: 0.9rem;
		margin-bottom: 0;
		margin-top: 24px;
		text-align: center;
	}

	.mainContent {
		background-color: var(--content-bg);
		border: 0;
		margin: 0 auto;
		max-width: 800px;
		padding: 20px;

		@include mixins.lg {
			border-left: solid 1px var(--content-border);
			border-right: solid 1px var(--content-border);
			padding: 24px 48px;
		}
	}

	// Visually hidden until focused, then slides into view (top-left).
	.skipLink {
		background: var(--bg-color);
		border: 1px solid var(--link-color);
		border-radius: 0 0 0.25rem 0;
		left: 0;
		padding: 0.5rem 1rem;
		position: absolute;
		top: 0;
		transform: translateY(-120%);
		transition: transform 0.15s ease;
		z-index: 10;

		&:focus {
			transform: translateY(0);
		}
	}

	// Respect users who prefer reduced motion: neutralize the color/transform
	// transitions used for theme switching, the skip link, and permalink reveal.
	@media (prefers-reduced-motion: reduce) {
		:global(*) {
			animation-duration: 0.01ms !important;
			transition-duration: 0.01ms !important;
		}
	}
</style>
