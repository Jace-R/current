<script>
	import { Col, Container, Row } from 'sveltestrap';
	import { quintOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	const [send, receive] = crossfade({
		duration: d => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: quintOut,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

	let uid = 1;

	let todos = [
		{ id: uid++, done: false, description: 'write some docs' },
		{ id: uid++, done: false, description: 'start writing blog post' },
		{ id: uid++, done: true,  description: 'buy some milk' },
		{ id: uid++, done: false, description: 'mow the lawn' },
		{ id: uid++, done: false, description: 'feed the turtle' },
		{ id: uid++, done: false, description: 'fix some bugs' },
	];

	function add(input) {
		const todo = {
			id: uid++,
			done: false,
			description: input.value
		};

		todos = [todo, ...todos];
		input.value = '';
	}

	/**
	 * @param {{ id: number; done: boolean; description: string; }} todo
	 */
	function remove(todo) {
		todos = todos.filter(t => t !== todo);
	}

	/**
	 * @param {ConcatArray<{ id: number; done: boolean; description: string; }>} todo
	 * @param {boolean} done
	 */
	function mark(todo, done) {
		todo.done = done;
		remove(todo);
		todos = todos.concat(todo);
	}

</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</svelte:head>

<Container>
	<Row>
		<Col xs="6">
			<div class="text-column">
				<h1>About this app</h1>
			
				<p>
					This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
					following into your command line and following the prompts:
				</p>
			
				<pre>npm create svelte@latest</pre>
			
				<p>
					The page you're looking at is purely static HTML, with no client-side interactivity needed.
					Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
					the devtools network panel and reloading.
				</p>
			
				<p>
					The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
					using it with JavaScript disabled!
				</p>
			</div>
			<div>
				<button class="btn btn-primary">
				Button	
				</button>
			</div>
		</Col>
		<Col xs="6">
			<!-- right column -->
			<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
				<div class="border-t border-gray-200 pt-4">
				  <dt class="font-medium text-gray-900">Origin</dt>
				  <dd class="mt-2 text-sm text-gray-500">Designed by Good Goods, Inc.</dd>
				</div>
		
				<div class="border-t border-gray-200 pt-4">
				  <dt class="font-medium text-gray-900">Material</dt>
				  <dd class="mt-2 text-sm text-gray-500">Solid walnut base with rare earth magnets and powder coated steel card cover</dd>
				</div>
		
				<div class="border-t border-gray-200 pt-4">
				  <dt class="font-medium text-gray-900">Dimensions</dt>
				  <dd class="mt-2 text-sm text-gray-500">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
				</div>
		
				<div class="border-t border-gray-200 pt-4">
				  <dt class="font-medium text-gray-900">Finish</dt>
				  <dd class="mt-2 text-sm text-gray-500">Hand sanded and finished with natural oil</dd>
				</div>
		
				<div class="border-t border-gray-200 pt-4">
				  <dt class="font-medium text-gray-900">Includes</dt>
				  <dd class="mt-2 text-sm text-gray-500">Wood card tray and 3 refill packs</dd>
				</div>
		
				<div class="border-t border-gray-200 pt-4">
				  <dt class="font-medium text-gray-900">Considerations</dt>
				  <dd class="mt-2 text-sm text-gray-500">Made from natural materials. Grain and color vary with each item.</dd>
				</div>
			  </dl>
			<!-- right column -->
		</Col>
	</Row>
</Container>

<Container>
	<Row>
		<Col xs="6">
			<div class="text-column">
				<h1>About this app</h1>
			
				<p>
					This is a <a href="https://kit.svelte.dev">SvelteKit</a> app. You can make your own by typing the
					following into your command line and following the prompts:
				</p>
			
				<pre>npm create svelte@latest</pre>
			
				<p>
					The page you're looking at is purely static HTML, with no client-side interactivity needed.
					Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
					the devtools network panel and reloading.
				</p>
			
				<p>
					The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
					using it with JavaScript disabled!
				</p>
			</div>
			<div>
				<button class="btn btn-primary">
				Button	
				</button>
			</div>
		</Col>
		<Col xs="6">
			<!-- animation -->
			<div class='board'>
				<input
					placeholder="what needs to be done?"
					on:keydown={e => e.key === 'Enter' && add(e.target)}
				>

				<div class='left'>
					<h2>todo</h2>
					{#each todos.filter(t => !t.done) as todo (todo.id)}
						<label
							in:receive="{{key: todo.id}}"
							out:send="{{key: todo.id}}"
						>
							<input type=checkbox on:change={() => mark(todo, true)}>
							{todo.description}
							<button on:click="{() => remove(todo)}">remove</button>
						</label>
					{/each}
				</div>

				<div class='right'>
					<h2>done</h2>
					{#each todos.filter(t => t.done) as todo (todo.id)}
						<label
							class="done"
							in:receive="{{key: todo.id}}"
							out:send="{{key: todo.id}}"
						>
							<input type=checkbox checked on:change={() => mark(todo, false)}>
							{todo.description}
							<button on:click="{() => remove(todo)}">remove</button>
						</label>
					{/each}
				</div>
			</div>
			<!-- animation -->
		</Col>
	</Row>
</Container>

