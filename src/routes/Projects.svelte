<script>
	import { marked } from 'marked';
	import { data, intro } from '$lib/data/projects';
</script>

<section id="projects">
	<h2>Projects, Experiments, and Other Such Nonsense</h2>

	<div class="content">
		{@html marked.parse(intro)}
	</div>

	{#each data as project}
		<div class="project">
			<h3 class="title">{project.title}</h3>

			<div class="body">
				<h4>{project.subtitle}</h4>
				{#each project.summary as summary}
					{@html marked.parse(summary)}
				{/each}

				<h4 class="linksTitle">Related links (external):</h4>
				<ul>
					{#each project.links as link}
						<li><a href={link.url} rel="noopener noreferrer" target="_blank">{link.title}</a></li>
					{/each}
				</ul>
			</div>
		</div>
	{/each}
</section>

<style lang="scss">
	@use '../lib/mixins';

	.content {
		@include mixins.contentSection;
	}

	.project {
		background: #fefefe;
		border: 1px solid #ccc;
		border-radius: 0.25rem;
		box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.07), 0 1px 9px 0 rgba(0, 0, 0, 0.07);
		margin: auto;
		margin-top: 32px;
		max-width: 600px;

		& + & {
			margin-top: 20px;
		}
	}

	.title {
		background: #dcdcdc;
		color: #464646;
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
