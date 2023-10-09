<script>
	import { marked } from 'marked';

	import { Section } from '$lib/components';
	import { contact } from '$lib/data/about';

	const RESUME_LINK = 'https://drive.google.com/file/d/1beuiLJfSYCiXC0NzcPIQBoxwDumpuxda/view?usp=drive_link';
	const LINKED_IN_LINK = 'https://www.linkedin.com/in/gabe-hargrave-264322133';
	const GITHUB_LINK = 'https://github.com/gargrave';
</script>

<Section slug="contact" title="Contact">
	{@html marked.parse(contact)}
	<ul>
		<li>
			<a href={RESUME_LINK}>Download my resume (PDF)</a>
		</li>
		<li>
			<a href={LINKED_IN_LINK}>View my LinkedIn profile</a>
		</li>
		<li>
			<a href={GITHUB_LINK}>View my GitHub profile</a>
		</li>
	</ul>
</Section>
