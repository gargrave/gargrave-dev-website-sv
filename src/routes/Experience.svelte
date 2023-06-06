<script>
	import { marked } from 'marked';

	import { Section } from '$lib/components';
	import experience from '$lib/data/experience';
</script>

<Section slug="experience" title="Experience">
	{#each experience as exp}
		<div class="expDetail">
			<h3 class="jobTitle">{exp.jobTitle} @ {exp.company}</h3>
			<div>{exp.dates}</div>
			<div class="summary">{exp.summary}</div>
			{@html marked.parse(exp.bullets)}
		</div>
	{/each}
</Section>

<style lang="scss">
	@use '../lib/mixins';

	.expDetail {
		& + & {
			margin-top: 2.5rem;
		}
	}

	.jobTitle {
		margin: 3px 0;
	}

	.summary {
		margin-top: 1rem;
	}
</style>
