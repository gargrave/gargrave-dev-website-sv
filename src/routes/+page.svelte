<script>
	import About from './About.svelte';
	import Contact from './Contact.svelte';
	import Education from './Education.svelte';
	import Experience from './Experience.svelte';
	import Projects from './Projects.svelte';
	import Skills from './Skills.svelte';

	const year = new Date().getFullYear();
	const copyright = `© ${year} Gabe Hargrave`;
</script>

<div class="mainContent">
	<header>
		<h1>Gabe Hargrave <small>Software Engineer</small></h1>
	</header>
	<hr />

	<main>
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
		background-color: rgba(255, 255, 255, 0.35);
		border: 0;
		margin: 0 auto;
		max-width: 800px;
		padding: 20px;

		@include mixins.lg {
			border-left: solid 1px rgba(0, 0, 0, 0.1);
			border-right: solid 1px rgba(0, 0, 0, 0.1);
			padding: 24px 48px;
		}
	}
</style>
