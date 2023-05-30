<script lang="ts">
	import { Link } from '$lib/components';

	export let slug: string;
	export let title: string;

	let linkVisible = false;
</script>

<section id={slug}>
	<h2 on:pointerleave={() => (linkVisible = false)} on:pointerenter={() => (linkVisible = true)}>
		{title}
		<Link target={slug} visible={linkVisible} />
	</h2>

	<div class="content">
		<slot />
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
