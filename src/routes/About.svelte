<script>
	import { marked } from 'marked';

	import { Section } from '$lib/components';
	import { intro, music } from '$lib/data/about';
</script>

<Section slug="about" title="About Me">
	{@html marked.parse(intro)}
	{@html marked.parse(music)}
</Section>
