<script>
	import { Section } from '$lib/components';
	import experience from '$lib/data/experience';
</script>

<Section slug="experience" title="Experience">
	{#each experience as exp}
		<div class="expDetail">
			<h3 class="jobTitle">{exp.jobTitle}, {exp.company}</h3>
			<div>{exp.dates}</div>
			<div class="summary">{exp.summary}</div>

			{#if (exp.bullets || []).length}
				<ul>
					{#each exp.bullets as bullet}
						<li>{bullet}</li>
					{/each}
				</ul>
			{/if}
		</div>
	{/each}
</Section>

<style lang="scss">
	@use '../lib/mixins';

	ul {
		@include mixins.sm {
			padding: 0.5rem 1rem;
		}
	}

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
