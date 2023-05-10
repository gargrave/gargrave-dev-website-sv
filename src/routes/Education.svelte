<script>
	import { Section } from '$lib/components';
	import data from '$lib/data/education';
</script>

<Section slug="education" title="Education">
	{#each data as edu}
		<div class="edu">
			<h3>{edu.title}</h3>
			<p>{edu.location}</p>
		</div>
	{/each}
</Section>

<style>
	.edu:not(:first-of-type) {
		margin-top: 16px;
	}

	h3 {
		margin: 0;
	}

	p {
		margin: 0;
	}
</style>
