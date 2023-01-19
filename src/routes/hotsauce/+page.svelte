<script>
    import { Parallax, ParallaxLayer } from 'svelte-parallax';
    import { Router, Route, Link } from "svelte-navigator";
    import NY from '$lib/images/New-York-Times.jpg';
    import { Image } from 'sveltestrap';
    import { Popover } from 'sveltestrap';
    import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
  } from 'sveltestrap';

  let open = false;
  const toggle = () => (open = !open);
  
    const [red, green, blue] = [200, 200, 400];
    let backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  
    const handleProgress = (/** @type {number} */ progress) => {
      const p = 1 + progress;
      backgroundColor = `rgb(${red * p}, ${green * p}, ${blue * p})`;
    };

    /**
	 * @type {any[]}
	 */
    let cart = [];
    let products = [
      {id: 1, name: "Apple", image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", price: 10, quantity: 1},
      {id: 2, name: "Orange", image: "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg", price: 11, quantity: 1},
      {id: 3, name: "Grapes", image: "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg", price: 12, quantity: 1},
      {id: 4, name: "Apple", image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", price: 10, quantity: 1},
      {id: 5, name: "Orange", image: "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg", price: 11, quantity: 1},
      {id: 6, name: "Grapes", image: "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg", price: 12, quantity: 1},
    ]
	
    const addToCart = (/** @type {{ id: any; name?: string; image?: string; price?: number; quantity: any; }} */ product) => {
      for(let item of cart) {
          if(item.id === product.id) {
            product.quantity += 1
            cart = cart;
            return;
          }
      }
      cart = [...cart, product]
    }
	
    const minusItem = (/** @type {{ id: any; quantity: number; }} */ product) => {
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
	
    const plusItem = (/** @type {{ id: any; }} */ product) => {
      for(let item of cart) {
        if(item.id === product.id) {
          item.quantity += 1
          cart = cart;
          return;
        }
      }
    }

	  $: total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

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
  
  <Parallax sections={3} style="background-color: {backgroundColor}">
    <ParallaxLayer
      offset={1}
      onProgress={handleProgress}
    >
        
     
     <!-- Product List -->
      <Container >
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
          
            <!-- right column -->
          </Col>
        </Row>
      </Container>
       <!--section2-->
  
<div class="container-fluid" >
  <div class="pt-2">
    <nav aria-label="Breadcrumb">
      <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <li>
          <div class="flex items-center">
            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Men</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li>
          <div class="flex items-center">
            <a href="#" class="mr-2 text-sm font-medium text-gray-900">Clothing</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li class="text-sm">
          <a href="#" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">Basic Tee 6-Pack</a>
        </li>
      </ol>
    </nav>

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
        <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
        <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
        <hr>
        <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
        <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
        
        <Button block>Block</Button>
      </div>
    </div>

    <!-- Product info -->
    <div class="mx-auto max-w-2xl px-4 pt-5 pb-5 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
      <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
        <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Tee 6-Pack</h1>
      </div>

      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
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

      <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
      </div>
    </div>
  </div>
</div>

 <!--section2-->
  <!--Grid row-->
  <div class="gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-8">
    <div class="row text-center" >
  
      <!--Grid column-->
      <div class="col-lg-3 col-md-12 mb-1">
      
        <!--Featured image-->
        <div class="view overlay rounded z-depth-1 waves-light" >
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
      
        <!--Excerpt-->
        <div class="card card-lift--hover shadow border-2">
          <h1 class="btn stretched-link mt-auto" style="width:100%">
            <strong>Cells</strong>
          </h1>
          <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet
            ut et voluptates repudiandae.
          </p>
          <a href="./assets/notes/biochem/cells.pdf" class="btn btn-secondary stretched-link text-white" target="_blank" download="cells.pdf">Download</a>
          </div>
      
      </div>
      <!--Grid column-->
      
      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-3">
      
        <!--Featured image-->
        <div class="view overlay rounded z-depth-1  waves-light" >
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
      
        <!--Excerpt-->
        <div class="card card-lift--hover shadow border-2">
          <h1  class="btn stretched-link mt-auto" style="width:100%">
            <strong>Enzymes</strong>
          </h1>
          <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet
            ut et voluptates repudiandae.
          </p>
          <a href="./assets/notes/biochem/enzymes.pdf" class="btn btn-secondary stretched-link text-white" target="_blank" download="enzymes.pdf">Download</a>
          </div>
      
      </div>
      <!--Grid column-->
      
      <!--Grid column-->
      <div class="col-lg-3 col-md-6 mb-3">
      
        <!--Featured image-->
        <div class="view overlay rounded z-depth-1  waves-light" >
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
      
        <!--Excerpt-->
        <div class="card card-lift--hover shadow border-2">
          <h1  class="btn stretched-link mt-auto" style="width:100%">
            <strong>Enzyme Kinetics</strong>
          </h1>
          <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet
            ut et voluptates repudiandae.
          </p>
          <a href="./assets/notes/biochem/enzymeKinetix.pdf" class="btn btn-secondary stretched-link text-white" target="_blank" download="enzymeKinetix.pdf">Download</a>
          </div>
      
      </div>
      <!--Grid column-->
      <!--Grid column-->
      <div class="col-lg-3 col-md-12 mb-3">
        
        <!--Featured image-->
        <div class="view overlay rounded z-depth-1 waves-light" >
          <a>
            <div class="mask rgba-white-slight"></div>
          </a>
        </div>
      
        <!--Excerpt-->
        <div class="card card-lift--hover shadow border-2">
          <h1  class="btn stretched-link mt-auto" style="width:100%">
            <strong>Enzymes Inhibition</strong>
          </h1>
          <p class="grey-text">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet
            ut et voluptates repudiandae.
          </p>
          <a href="./assets/notes/biochem/inhibition.pdf" class="btn btn-secondary stretched-link text-white" target="_blank" download="inhibition.pdf">Download</a>
          </div>
      
      </div>
      <!--Grid column-->
      
      </div>
      <!--Grid row-->
  </div>
  <!-- Product List -->
  <div>
    <Router>
     <header>
       <nav>
       <Link to="/">Products</Link>
       <Link to="about">Cart</Link>
       </nav>
     </header>
     
     <main>
   
       <Route path="/">
         <p>There are {cart.length} items in your cart</p>
         <div class="product-list">
           {#each products as product}
           <div>
             <div class="image" style="background-image: url({product.image})"></div>
           <h4>{product.name}</h4>
           <p>${product.price}</p>
           <button on:click={() => addToCart(product)}>Add to cart</button>
           </div>
           {/each}
         </div>
       </Route>
     
       <Route path="about">
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
       </Route>
     </main>
     </Router>
 </div>
  
    </ParallaxLayer>
    
    <!--end of modal mode-->
    <hr>
          <p class="text-center">Est. 1980</p><h1>The Seeds Gallery </h1>
    <hr>
    <div class="mt-6 space-y-12 lg:grid lg:grid-cols-6 lg:gap-x-6 lg:space-y-0">
		  <div class="group relative">
			<div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">    
				<div>
				  <Button block color="secondary" on:click={toggle}>Lemonstarburst</Button>
					  <Modal isOpen={open} {toggle}>
						<ModalHeader {toggle}>Modal title</ModalHeader>
						<ModalBody>
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						  tempor incididunt ut labore et dolore magna aliqua.
						</ModalBody>
						<ModalFooter>
						  <Button color="primary" on:click={toggle}>Do Something</Button>
						  <Button color="secondary" on:click={toggle}>Cancel</Button>
						</ModalFooter>
					  </Modal>
				</div>
		  </div>
  
		  <div class="group relative">
			<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">
			  <div>
				<Button block color="secondary" on:click={toggle}>Jay's Peach Scorpion</Button>
					<Modal isOpen={open} {toggle}>
					  <ModalHeader {toggle}>Modal title</ModalHeader>
					  <ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					  </ModalBody>
					  <ModalFooter>
						<Button color="primary" on:click={toggle}>Do Something</Button>
						<Button color="secondary" on:click={toggle}>Cancel</Button>
					  </ModalFooter>
					</Modal>
			  </div> 
		  </div>
  
		  <div class="group relative">
			<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">
			  <div>
				<Button block color="secondary" on:click={toggle}>Scotch Bonnet</Button>
					<Modal isOpen={open} {toggle}>
					  <ModalHeader {toggle}>Modal title</ModalHeader>
					  <ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					  </ModalBody>
					  <ModalFooter>
						<Button color="primary" on:click={toggle}>Do Something</Button>
						<Button color="secondary" on:click={toggle}>Cancel</Button>
					  </ModalFooter>
					</Modal>
			  </div> 
		  </div>
		  
		  <div class="group relative">
			<div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">    
				<div>
				  <Button block color="secondary" on:click={toggle}>Trinidad Scorpion</Button>
					  <Modal isOpen={open} {toggle}>
						<ModalHeader {toggle}>Modal title</ModalHeader>
						<ModalBody>
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						  tempor incididunt ut labore et dolore magna aliqua.
						</ModalBody>
						<ModalFooter>
						  <Button color="primary" on:click={toggle}>Do Something</Button>
						  <Button color="secondary" on:click={toggle}>Cancel</Button>
						</ModalFooter>
					  </Modal>
				</div>
		  </div>
  
		  <div class="group relative">
			<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">
			  <div>
				<Button block color="secondary" on:click={toggle}>7 Pot Brains</Button>
					<Modal isOpen={open} {toggle}>
					  <ModalHeader {toggle}>Modal title</ModalHeader>
					  <ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					  </ModalBody>
					  <ModalFooter>
						<Button color="primary" on:click={toggle}>Do Something</Button>
						<Button color="secondary" on:click={toggle}>Cancel</Button>
					  </ModalFooter>
					</Modal>
			  </div> 
		  </div>
  
		  <div class="group relative">
			<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">
			  <div>
				<Button block color="secondary" on:click={toggle}>Berry Peach Lava</Button>
					<Modal isOpen={open} {toggle}>
					  <ModalHeader {toggle}>Modal title</ModalHeader>
					  <ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					  </ModalBody>
					  <ModalFooter>
						<Button color="primary" on:click={toggle}>Do Something</Button>
						<Button color="secondary" on:click={toggle}>Cancel</Button>
					  </ModalFooter>
					</Modal>
			  </div> 
		  </div>
		</div>

    <!--end of modal mode-->

    <!--end of modal mode-->
    <div class="mt-6 space-y-12 lg:grid lg:grid-cols-6 lg:gap-x-6 lg:space-y-0">
		  <div class="group relative">
			<div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">    
				<div>
				  <Button block color="secondary" on:click={toggle}>Pineapple Lemonstarburst</Button>
					  <Modal isOpen={open} {toggle}>
						<ModalHeader {toggle}>Modal title</ModalHeader>
						<ModalBody>
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						  tempor incididunt ut labore et dolore magna aliqua.
						</ModalBody>
						<ModalFooter>
						  <Button color="primary" on:click={toggle}>Do Something</Button>
						  <Button color="secondary" on:click={toggle}>Cancel</Button>
						</ModalFooter>
					  </Modal>
				</div>
		  </div>
  
		  <div class="group relative">
			<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">
			  <div>
				<Button block color="secondary" on:click={toggle}>Strawberry Inferno</Button>
					<Modal isOpen={open} {toggle}>
					  <ModalHeader {toggle}>Modal title</ModalHeader>
					  <ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					  </ModalBody>
					  <ModalFooter>
						<Button color="primary" on:click={toggle}>Do Something</Button>
						<Button color="secondary" on:click={toggle}>Cancel</Button>
					  </ModalFooter>
					</Modal>
			  </div> 
		  </div>
  
		  <div class="group relative">
			<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">
			  <div>
				<Button block color="secondary" on:click={toggle}>Berry Peach Lava</Button>
					<Modal isOpen={open} {toggle}>
					  <ModalHeader {toggle}>Modal title</ModalHeader>
					  <ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					  </ModalBody>
					  <ModalFooter>
						<Button color="primary" on:click={toggle}>Do Something</Button>
						<Button color="secondary" on:click={toggle}>Cancel</Button>
					  </ModalFooter>
					</Modal>
			  </div> 
		  </div>
		  
		  <div class="group relative">
			<div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">    
				<div>
				  <Button block color="secondary" on:click={toggle}>Pineapple Lemonstarburst</Button>
					  <Modal isOpen={open} {toggle}>
						<ModalHeader {toggle}>Modal title</ModalHeader>
						<ModalBody>
						  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						  tempor incididunt ut labore et dolore magna aliqua.
						</ModalBody>
						<ModalFooter>
						  <Button color="primary" on:click={toggle}>Do Something</Button>
						  <Button color="secondary" on:click={toggle}>Cancel</Button>
						</ModalFooter>
					  </Modal>
				</div>
		  </div>
  
		  <div class="group relative">
			<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">
			  <div>
				<Button block color="secondary" on:click={toggle}>Strawberry Inferno</Button>
					<Modal isOpen={open} {toggle}>
					  <ModalHeader {toggle}>Modal title</ModalHeader>
					  <ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					  </ModalBody>
					  <ModalFooter>
						<Button color="primary" on:click={toggle}>Do Something</Button>
						<Button color="secondary" on:click={toggle}>Cancel</Button>
					  </ModalFooter>
					</Modal>
			  </div> 
		  </div>
  
		  <div class="group relative">
			<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">
			  <div>
				<Button block color="secondary" on:click={toggle}>Berry Peach Lava</Button>
					<Modal isOpen={open} {toggle}>
					  <ModalHeader {toggle}>Modal title</ModalHeader>
					  <ModalBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua.
					  </ModalBody>
					  <ModalFooter>
						<Button color="primary" on:click={toggle}>Do Something</Button>
						<Button color="secondary" on:click={toggle}>Cancel</Button>
					  </ModalFooter>
					</Modal>
			  </div> 
		  </div>
		</div>

    <!--end of modal mode-->

    <Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Collectibles</h1></Button>

  </Parallax>

  <div class="bg-gray-100">
    <div class="mt-6 mb-6">
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
            <div class="mt-15 mb-6"> 
              <div>
                <h1></h1>
                <h1></h1>
                <h1></h1>
              </div>
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
            </div>
            
            <!-- animation -->
          </Col>
        </Row>
      </Container> 
    </div>
    
  </div>
  
  

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</svelte:head>


  <style>
    .product-list, .cart-item {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
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
  </style>