<svelte:head>
	<title>Seeds</title>
	<meta name="description" content="About this app" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</svelte:head>

<script>
	import light from '$lib/images/light.jpg';
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

<div class="bg-white">
	<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
	  <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
	  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
		<div class="group relative">
		  <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
			<img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
		  </div>
		  <div class="mt-4 flex justify-between">
			<div>
			  <h3 class="text-sm text-gray-700">
				<a href="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg">
				  <span aria-hidden="true" class="absolute inset-0"></span>
				  Basic Tee
				</a>
			  </h3>
			  <p class="mt-1 text-sm text-gray-500">Black</p>
			</div>
			<p class="text-sm font-medium text-gray-900">$35</p>
		  </div>
		</div>
  
		<!-- More products... -->
	  </div>
	</div>
  </div>


<body>

<!-- Header -->
<div class="header">
  <h1>Responsive Image Gallery</h1>
  <p>Resize the browser window to see the responsive effect.</p>
</div>

<!-- Photo Grid -->
<div class="container">
	<div class="row"> 
		<div class="first">
		  <img src={light} alt="background"/>
		</div>
	</div>
</div>


</body>



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


<style>
	* {
	  box-sizing: border-box;
	}
	
	body {
	  margin: 0;
	  font-family: Arial;
	}
	
	.header {
	  text-align: center;
	  padding: 32px;
	}
	
	.row {
	  display: flex;
	  flex-wrap: wrap;
	  padding: 0 4px;
	}
	
	/* Create four equal columns that sits next to each other */
	.first{
	  flex: 25%;
	  max-width: 250px;
	  padding: 0 4px;
	}

	.third{
	  flex: 25%;
	  max-width: 400px;
	  padding: 0 4px;
	}
	
	.second{
	  margin-top: 8px;
	  vertical-align: middle;
	}

	.fourth{
	  flex: 25%;
	  max-width: 800px;
	  padding: 0 4px;
	}
	
	/* Responsive layout - makes a two column-layout instead of four columns */
	@media (max-width: 800px) {
	  .first, .third {
		flex: 50%;
		max-width: 50%;
	  }
	}
	
	/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
	@media (max-width: 600px) {
	  .second, .fourth {
		flex: 100%;
		max-width: 100%;
	  }
	}

	.board {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1em;
		max-width: 36em;
		margin: 0 auto;
	}

	.board > input {
		font-size: 1.4em;
		grid-column: 1/3;
	}

	h2 {
		font-size: 2em;
		font-weight: 200;
		user-select: none;
		margin: 0 0 0.5em 0;
	}

	label {
		position: relative;
		line-height: 1.2;
		padding: 0.5em 2.5em 0.5em 2em;
		margin: 0 0 0.5em 0;
		border-radius: 2px;
		user-select: none;
		border: 1px solid hsl(240, 8%, 70%);
		background-color:hsl(240, 8%, 93%);
		color: #333;
	}

	input[type="checkbox"] {
		position: absolute;
		left: 0.5em;
		top: 0.6em;
		margin: 0;
	}

	.done {
		border: 1px solid hsl(240, 8%, 90%);
		background-color:hsl(240, 8%, 98%);
	}

	button {
		position: absolute;
		top: 0;
		right: 0.2em;
		width: 2em;
		height: 100%;
		background: no-repeat 50% 50% url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23676778' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
		background-size: 1.4em 1.4em;
		border: none;
		opacity: 0;
		transition: opacity 0.2s;
		text-indent: -9999px;
		cursor: pointer;
	}

	label:hover button {
		opacity: 1;
	}
</style>


