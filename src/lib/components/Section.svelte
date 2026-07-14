<script lang="ts">
	import { Link } from '$lib/components';

	interface Props {
		slug: string;
		title: string;
		children?: import('svelte').Snippet;
	}

	let { slug, title, children }: Props = $props();
</script>

<section id={slug} aria-labelledby="{slug}-heading">
	<h2 id="{slug}-heading">
		{title}
		<Link target={slug} />
	</h2>

	<div class="content">
		{@render children?.()}
	</div>
</section>

<style lang="scss">
	@use '../mixins';

	.content {
		@include mixins.lg {
			padding-left: 1.25rem;
		}
	}

	// Reveal the decorative permalink on hover/focus-within (CSS only — no JS
	// pointer handlers needed).
	h2 :global(.permalink) {
		visibility: hidden;
	}

	h2:hover :global(.permalink),
	h2:focus-within :global(.permalink) {
		visibility: visible;
	}
</style>
