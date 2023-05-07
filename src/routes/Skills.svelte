<script>
	import skills from '$lib/data/skills';
</script>

<section id="skills">
	<h2>Skills</h2>

	<div class="content">
		<ul>
			{#each skills as skill}
				<li>
					<strong>{skill.title}</strong>
					<span class="subtitle">{skill.subtitle}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style lang="scss">
	@use '../lib/mixins';

	.content {
		@include mixins.contentSection;
	}

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
			padding-inline-start: inherit;
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
