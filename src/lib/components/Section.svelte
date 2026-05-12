<script lang="ts">
	import { Link } from '$lib/components';

	interface Props {
		slug: string;
		title: string;
		children?: import('svelte').Snippet;
	}

	let { slug, title, children }: Props = $props();

	let linkVisible = $state(false);
</script>

<section id={slug}>
	<h2 onpointerleave={() => (linkVisible = false)} onpointerenter={() => (linkVisible = true)}>
		{title}
		<Link target={slug} visible={linkVisible} />
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
</style>
