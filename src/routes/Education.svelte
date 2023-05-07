<script>
	import data from '$lib/data/education';
</script>

<section id="education">
	<h2>Education</h2>

	<div class="content">
		{#each data as edu}
			<div class="edu">
				<h3>{edu.title}</h3>
				<p>{edu.location}</p>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	@use '../lib/mixins';

	.content {
		@include mixins.contentSection;
	}

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
