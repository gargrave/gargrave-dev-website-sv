<script lang="ts">
	interface Props {
		target: string;
	}

	let { target }: Props = $props();
</script>

<!--
	Decorative permalink icon. It is intentionally hidden from assistive tech
	(aria-hidden) and removed from the tab order (tabindex="-1") — the section's
	own id already provides the anchor for keyboard/AT users. Visibility is
	controlled by the parent's hover/focus-within CSS.
-->
<a class="permalink" aria-hidden="true" tabindex="-1" href="#{target}"
	><svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"
		><path
			d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"
		/></svg
	></a
>
