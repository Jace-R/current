<svelte:head>
	<title>Seeds</title>
	<meta name="description" content="About this app" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</svelte:head>

<script lang="ts">
	import light from '$lib/images/light.jpg';
	import seeds from '$lib/images/seeds.gif';
	import sauce from '$lib/images/sauce.gif';
	import { quintOut } from 'svelte/easing';
	import { Col, Container, Row } from 'sveltestrap';
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

	let src = "$lib/images/seeds.gif";

	let cart: any[] = [];
	let products = [
		{id: 1, name: "Apple", image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", price: 10, quantity: 1},
		{id: 2, name: "Orange", image: "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg", price: 11, quantity: 1},
		{id: 3, name: "Grapes", image: "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg", price: 12, quantity: 1},
	]
	
	const addToCart = (product) => {
		for(let item of cart) {
				if(item.id === product.id) {
					product.quantity += 1
					cart = cart;
					return;
				}
		}
		cart = [...cart, product]
	}
	
	const minusItem = (product) => {
		for(let item of cart) {
				if(item.id === product.id) {
					if(product.quantity > 1 ) {
							product.quantity -= 1
							cart = cart
					} else {
							cart = cart.filter((cartItem) => cartItem != product)
					}
					return;
				}
		}
	}
	
	const plusItem = (product) => {
		for(let item of cart) {
			if(item.id === product.id) {
				item.quantity += 1
				cart = cart;
				return;
			}
		}
	}

	$: total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
</script>

<section>
	<div class="bg-white" >
		<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		  <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
	  
		  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			<div class="group relative">
			  <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
				<img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
			  </div>
			  <div class="mt-4 flex justify-between">
				<div>
				  <h3 class="text-sm text-warning-700">
					<a href="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg">
					  <span aria-hidden="true" class="absolute inset-0"></span>
					  Basic Tee
					</a>
				  </h3>
				  <p class="mt-1 text-sm text-secondary-500">Black</p>
				</div>
				<p class="text-sm font-medium text-secondary-900">$35</p>
			  </div>
			</div>
	  
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
			  <!-- more products -->
		  </div>
		</div>
	  </div>

	  <div class="bg-white" >
		<div class="container">
			<div class="bg-white">
				<div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-400 lg:pt-6 lg:pb-16 lg:pr-8" >
							<!-- Description and details -->
							<div>
							<h3 class="sr-only">Description</h3>
					
							<div class="space-y-6">
								<p class="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
							</div>
							</div>
					
							<div class="mt-10">
							<h3 class="text-sm font-medium text-gray-900">Highlights</h3>
					
							<div class="mt-4">
								<ul role="list" class="list-disc space-y-2 pl-4 text-sm">
								<li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>
					
								<li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>
					
								<li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
					
								<li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
								</ul>
							</div>
							</div>
					
							<div class="mt-10">
							<h2 class="text-sm font-medium text-gray-900">Details</h2>
					
							<div class="mt-4 space-y-6">
								<p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
							</div>
							</div>
					</div>
				</div>
			</div>
		
		<section>
			<div class="container" >
				<div class="bg-success">
					<!-- Image gallery -->
				<div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
					<div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
					  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
					</div>
					<div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
					  <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
						<img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg" alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
					  </div>
					  <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
						<img src="https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg" alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
					  </div>
					</div>
					<div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
					  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
					</div>
				  </div>
				</div>
			</div>
		</section>	
	  </div>
</section>
<section>
	<div class="bg-white">
		<div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
		  <div>
			<h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Technical Specifications</h2>
			<p class="mt-4 text-gray-500">The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated steel divider separates active cards from new ones, or can be used to archive important task lists.</p>
	  
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
		  </div>
		  <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
			<img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
			<img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
			<img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100">
			<img src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100">
		  </div>
		</div>
	  </div>
</section>

<!--shopping cart -->

<p>There are {cart.length} items in your cart</p>
<div class="product-list">
	{#each products as product}
	<div>
		<div class="image" style="background-image: url({product.image})"></div>
	<h4>{product.name}</h4>
	<p>₹{product.price}</p>
	<button on:click={() => addToCart(product)}>Add to cart</button>
	</div>
	{/each}
</div>

<div class="cart-list">
	{#each cart as item }
		{#if item.quantity > 0}
		<div class="cart-item">
			<img width="50" src={item.image} alt={item.name}/>
			<div>{item.quantity}
				<button on:click={() => plusItem(item)}>+</button>
				<button on:click={() => minusItem(item)}>-</button>
			</div>
			<p>₹{item.price * item.quantity}</p>
		</div>
		{/if}
	{/each}
	<div class="total">
		<h4>Total: ₹ {total}</h4>
	</div>
</div>
<!--shopping cart -->

		<div class="bg-white">
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
		</div>

<section>
	<div class="container" >
		<div class="row">
			<div class="col-md-8 ml-auto mr-auto text-center">
				<h1 class="title text-gray underline pb-3">Who We Are</h1>
				<h5 class="description text-gray pt-3">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>
			</div>
		</div>
		<div class="separator separator-primary"></div>
		<div class="section-story-overview pt-5">
			<div class="row justify-content-center">
			  <!-- Grid column -->
				<div class="col-md-6">
				  <!--Image-->
				  <img src={sauce} alt="background"/>
		  
				</div>
			  <!-- Grid column -->

				<div class="col-md-5">
					<!-- First image on the right side, above the article -->
					<div class="image-container image-right" style="background-image: url('./assets/img/extras/aboutUs.jpg')"></div>
					<h3 class="text-gray">So what does the new record for the lowest level of winter ice actually mean</h3>
					<p class="text-gray">The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
	
		

<section>
	<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
		<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			<div class="group relative">
			  <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
				<img src={seeds} alt="seeds"/>
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
			<div class="group relative">
				<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
				  <img src={seeds} alt="seeds"/>
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
		  </div>
	</div>
	<div class="container">
		<div class="row"> 
			<div class="first">
				<img src={seeds} alt="seeds"/>
			</div>
		</div>
		<div>
			<p>Responsive Image Gallery</p>
			  <p>Resize the browser window to see the responsive effect.</p>
		</div>

		<div class="row"> 
			<div class="first">
				<img src={seeds} alt="seeds"/>
			</div>
		</div>
		<div>
			<p>Responsive Image Gallery</p>
			  <p>Resize the browser window to see the responsive effect.</p>
		</div>
</section>

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

	.product-list, .cart-item {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}
	
	.image {
		height: 150px;
		width: 150px;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}
	.total {
		text-align: right;
	}
	
	.cart-list {
		border: 2px solid;
		padding: 10px;
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
	body {
  font: 1rem/1.5 var(--bs-font-sans-serif);
}
a {
  color: var(--bs-purple);
}
</style>


