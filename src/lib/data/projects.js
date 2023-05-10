export const intro = `
A handful of miscellaneous side projects I have built here and there. Time and energy to
work on this kind of stuff outside of work is generally fairly limited, but I do my best to stay
up-to-date on all the fun new shiny things out there, try to learn new stuff, and
apply said stuff in a project somewhere. 

The links here should all be working to the best of my knowledge, but don't hold it against me if you come across any broken links or anything. The Internet is hard.

Also: be sure to [check out my GitHub profile](https://github.com/gargrave?tab=repositories)
for many more various projects and experiments!
`;

export const data = [
	{
		title: 'My Website (yes, this one!)',
		subtitle: 'The very website you are looking at!',
		summary: [
			"Writing this gives me a strange sense of recursion, but yes, it's the source for the website you are looking at right this very second.",
			'Rebuilt from scratch in 2023 using [SvelteKit](https://kit.svelte.dev) because I wanted an excuse to finally see what all the fuss is about. If you want to contrast and compare Svelte/Kit and React, I am now prepared to do so!',
			'The previous version is also linked below—it was built with React, but is otherwise mostly identical from a content standpoint.'
		],
		links: [
			{
				title: 'My Website on GitHub',
				url: 'https://github.com/gargrave/gargrave-dev-website-sv'
			},
			{
				title: 'My Previous Website (React)',
				url: 'https://github.com/gargrave/gargrave-dev-website'
			}
		]
	},
	{
		title: 'React Simple Select',
		subtitle: 'A fairly small-ish implementation of a select-like component in React',
		summary: [
			'An experiment to try and build a "select-like" component in React. Inspired by **react-select**, but with the goal of having a simpler, more flexible API.',
			"I was hoping to build a suitable replacement that my team could swap in for **react-select**, but as it turns out, it's pretty hard to build and maintain a feature-rich accessible select component. Who knew? A good learning exercise nonetheless."
		],
		links: [
			{
				title: 'React Simple Select on GitHub',
				url: 'https://github.com/gargrave/react-simple-select'
			},
			{
				title: 'React Simple Select Live Demo/Docs',
				url: 'https://gargrave.github.io/react-simple-select/'
			}
		]
	},
	{
		title: 'React Magic List',
		subtitle: 'A virtualized list component for React',
		summary: [
			'A minimal implementation of a React virtualized list component. I built this as part of a demo for a learning session I led to demonstrate the value of virtualized lists.'
		],
		links: [
			{
				title: 'React Magic List on GitHub',
				url: 'https://github.com/gargrave/react-magic-list'
			}
		]
	},
	{
		title: 'Velcrostrip',
		subtitle: 'A general-use React UI component library',
		summary: [
			'An experiment at making a general-use component library for React, inspired by early versions of [Shoelace CSS](https://shoelace.style/).',
			'There are only a few components here, but the ones that are there are pretty nice. The loaders in particular were fun to work with.'
		],
		links: [
			{
				title: 'Velcrostrip on GitHub',
				url: 'https://github.com/gargrave/velcrostrip'
			}
		]
	},
	{
		title: 'Gargame',
		subtitle: 'An experiment to write an HTML5/Canvas game engine in TypeScript',
		summary: [
			'I have used quite a few different game engines over the years, both in JS/TS land and elsewhere, and there are always a few things I dislike about each of them.',
			'The main goals here were keeping the engine as simple as possible and minimizing external dependencies—all of course, while pursuing the pipe dream of creating "the game engine of my dreams" (whatever that means).',
			'This was fun to work on, but ultimately way too much time and effort to ever get it to a production-ready state.'
		],
		links: [
			{
				title: 'Gargame on GitHub',
				url: 'https://github.com/gargrave/gargame'
			}
		]
	},
	{
		title: 'Space Junk [Game]',
		subtitle: "A puzzle-action-matching game set in space! What's not to love?",
		summary: [
			"This was the last game We Did It Games made before we came to the unspoken conclusion that we didn't really have time to work on games anymore. The design was kept extremely minimal for these reasons, but it still turned out to be a pretty fun game.",
			'The final game was built with Unity 5 (C#), and the original prototype was made in GameMaker. It only took us a month or two total to put all of this together--remember, kids: keep your projects realistically small, and you might actually finish them!',
			'[Watch the Space Junk launch trailer here](https://youtu.be/c6pNwtvO1ME)! Then follow the link below to download your own copy!'
		],
		links: [
			{
				title: 'Space Junk game download',
				url: 'https://wediditgames.itch.io/space-junk'
			},
			{
				title: 'Space Junk on GitHub',
				url: 'https://github.com/gargrave/SpaceJunk'
			}
		]
	}
];
