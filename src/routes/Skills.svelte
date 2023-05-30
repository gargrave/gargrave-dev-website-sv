<script>
	import { Section } from '$lib/components';
	import skills from '$lib/data/skills';
</script>

<Section slug="skills" title="Skills">
	<ul>
		{#each skills as skill}
			<li>
				<strong>{skill.title}</strong>
				<span class="subtitle">{skill.subtitle}</span>
			</li>
		{/each}
	</ul>
</Section>

<style lang="scss">
	@use '../lib/mixins';

	ul {
		@include mixins.sm {
			list-style: none;
			padding: 0;

			li + li {
				margin-top: 1rem;
			}
		}

		@include mixins.lg {
			line-height: 1.6rem;
			padding-inline-start: 1rem;
		}
	}

	.subtitle {
		color: var(--text-color-muted);
		font-size: 0.9rem;

		@include mixins.sm {
			display: block;
		}

		@include mixins.lg {
			display: inline-block;
		}
	}
</style>
