<script>
	import { marked } from 'marked';
	import { Section } from '$lib/components';
	import { intro } from '$lib/data/about';
</script>

<Section slug="about" title="About Me">
	{@html marked.parse(intro)}
</Section>
