<script>
	import experience from '$lib/data/experience';
</script>

<section id="experience">
	<h2>Experience</h2>

	<div class="content">
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
	</div>
</section>

<style lang="scss">
	@use '../lib/mixins';

	ul {
		@include mixins.sm {
			padding: 0.5rem 1rem;
		}
	}

	.content {
		@include mixins.contentSection;
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
		margin-top: 12px;
	}
</style>
