<script>
	import { marked } from 'marked';
	import { Section } from '$lib/components';
	import { data, intro } from '$lib/data/projects';
</script>

<Section slug="projects" title="Projects, Experiments, and Other Such Nonsense">
	{@html marked(intro)}

	<div class="project-list">
		{#each data as project (project.title)}
			<div class="project">
				<h3 class="title">{project.title}</h3>

				<div class="body">
					<h4>{project.subtitle}</h4>
					{#each project.summary as summary, i (i)}
						{@html marked(summary)}
					{/each}

					<h4 class="linksTitle">Related links (external):</h4>
					<ul>
						{#each project.links as link (link.url)}
							<li><a href={link.url} rel="noopener noreferrer" target="_blank">{link.title}</a></li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</Section>

<style lang="scss">
	@use '../lib/mixins';

	.project-list {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;

		@include mixins.lg() {
			margin-left: -1.25rem;
		}
	}

	.project {
		background: var(--card-bg);
		border: 1px solid var(--card-border);
		border-radius: 0.25rem;
		box-shadow:
			0 2px 3px 0 var(--card-shadow),
			0 1px 9px 0 var(--card-shadow);
		margin: auto;
		margin-top: 32px;
		max-width: 600px;

		& + & {
			margin-top: 20px;
		}
	}

	.title {
		background: var(--card-header-bg);
		color: var(--card-header-text);
		margin: 0;
		padding: 0.75rem 1rem;
	}

	.body {
		padding: 0.5rem 1rem;
		padding-top: 0;
	}

	.linksTitle {
		margin: 0;
	}
</style>
