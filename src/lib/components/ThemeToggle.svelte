<script lang="ts">
	import { onMount } from 'svelte';

	const THEME_COLORS = { light: '#fbfbfb', dark: '#161616' };

	let theme = $state<'light' | 'dark'>('light');

	onMount(() => {
		const current = document.documentElement.dataset.theme;
		theme = current === 'dark' ? 'dark' : 'light';
	});

	function toggle() {
		const next = theme === 'dark' ? 'light' : 'dark';
		theme = next;
		document.documentElement.dataset.theme = next;
		try {
			localStorage.setItem('theme', next);
		} catch {
			// ignore (e.g. private mode)
		}
		// Reflect the explicit choice in the browser chrome, overriding the
		// system-preference-based meta tags.
		for (const meta of document.querySelectorAll('meta[name="theme-color"]')) {
			meta.removeAttribute('media');
			meta.setAttribute('content', THEME_COLORS[next]);
		}
	}
</script>

<button
	class="themeToggle"
	type="button"
	onclick={toggle}
	aria-pressed={theme === 'dark'}
	aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
	title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
>
	{#if theme === 'dark'}
		<!-- Sun -->
		<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
			<circle cx="12" cy="12" r="4" fill="currentColor" />
			<g stroke="currentColor" stroke-width="2" stroke-linecap="round">
				<line x1="12" y1="2" x2="12" y2="4" />
				<line x1="12" y1="20" x2="12" y2="22" />
				<line x1="2" y1="12" x2="4" y2="12" />
				<line x1="20" y1="12" x2="22" y2="12" />
				<line x1="4.9" y1="4.9" x2="6.3" y2="6.3" />
				<line x1="17.7" y1="17.7" x2="19.1" y2="19.1" />
				<line x1="4.9" y1="19.1" x2="6.3" y2="17.7" />
				<line x1="17.7" y1="6.3" x2="19.1" y2="4.9" />
			</g>
		</svg>
	{:else}
		<!-- Moon -->
		<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
			<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" fill="currentColor" />
		</svg>
	{/if}
</button>

<style lang="scss">
	.themeToggle {
		align-items: center;
		background: transparent;
		border: 1px solid var(--divider-color);
		border-radius: 50%;
		color: var(--text-color-muted);
		cursor: pointer;
		display: inline-flex;
		flex-shrink: 0;
		height: 40px;
		justify-content: center;
		padding: 0;
		transition:
			color 0.2s ease,
			border-color 0.2s ease,
			background-color 0.2s ease;
		width: 40px;

		&:hover {
			color: var(--text-color);
		}

		&:focus-visible {
			outline: 2px solid var(--link-color);
			outline-offset: 2px;
		}
	}
</style>
