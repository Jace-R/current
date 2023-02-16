<script>

import p1 from '$lib/images/peppers/1.jpg'
  import p2 from '$lib/images/peppers/2.jpg'
  import p3 from '$lib/images/peppers/3.jpg'
  import p4 from '$lib/images/peppers/4.jpg'
  import p5 from '$lib/images/peppers/5.jpg'
  import p6 from '$lib/images/peppers/6.jpg'
  import p7 from '$lib/images/peppers/7.jpg'
  import p8 from '$lib/images/peppers/7.jpg'
  import p9 from '$lib/images/peppers/8.jpg'
  import p10 from '$lib/images/peppers/10.jpg'
  import p11 from '$lib/images/peppers/11.jpg'
  import p12 from '$lib/images/peppers/12.jpg'
  import p13 from '$lib/images/peppers/13.jpg'
  import p14 from '$lib/images/peppers/14.jpg'
  import p15 from '$lib/images/peppers/15.jpg'
  import p16 from '$lib/images/peppers/16.jpg'
  import p17 from '$lib/images/peppers/17.jpg'
  import p18 from '$lib/images/peppers/18.jpg'
  import p19 from '$lib/images/peppers/19.jpg'
  import p20 from '$lib/images/peppers/20.jpg'
  import p21 from '$lib/images/peppers/21.jpg'
  import p22 from '$lib/images/peppers/22.jpg'
  import p23 from '$lib/images/peppers/23.jpg'
  import p24 from '$lib/images/peppers/24.jpg'
  import p25 from '$lib/images/peppers/25.jpg'
  import p26 from '$lib/images/peppers/26.jpg'
  import p27 from '$lib/images/peppers/27.jpg'
  import p28 from '$lib/images/peppers/28.jpg'
  import p29 from '$lib/images/peppers/29.jpg'
  import p30 from '$lib/images/peppers/30.jpg'
  import p31 from '$lib/images/peppers/31.jpg'
  import p32 from '$lib/images/peppers/32.jpg'
  import p33 from '$lib/images/peppers/33.jpg'
  import p34 from '$lib/images/peppers/34.jpg'
  import p35 from '$lib/images/peppers/35.jpg'
  import p36 from '$lib/images/peppers/36.jpg'
  import p37 from '$lib/images/peppers/37.jpg'
  import p38 from '$lib/images/peppers/38.jpg'
  import p39 from '$lib/images/peppers/39.jpg'
  import p40 from '$lib/images/peppers/40.jpg'
  import p41 from '$lib/images/peppers/41.jpg'
  import p42 from '$lib/images/peppers/42.jpg'
  import p43 from '$lib/images/peppers/43.jpg'
  import p44 from '$lib/images/peppers/44.jpg'
  import p45 from '$lib/images/peppers/45.jpg'
  import berries from '$lib/images/peppers/straw.jpg'
  import winter from '$lib/images/peppers/winter.jpg'
  import winterberry from '$lib/images/peppers/winter2.jpg'
  import yellow from '$lib/images/peppers/yellow.jpg'
  import pepper from '$lib/images/peppers/pepper.jpg'
  import jars from '$lib/images/peppers/jars.jpg'
  import spice from '$lib/images/peppers/spice1.png'
  import spices from '$lib/images/peppers/spice.png'
  
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
    let jar = [];
    let ingredients = [
      {id: 1, name: "Apple", image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", price: 2, quantity: 1},
      {id: 2, name: "Winterberries", image: winterberry, price: 3, quantity: 1},
      {id: 3, name: "Carolina Reaper", image: p11, price: 3, quantity: 1},
      {id: 4, name: 'Spices', image: spice, price: 1, quantity: 1},
      {id: 5, name: "Strawberries", image: berries, price: 3, quantity: 1},
      {id: 6, name: "Scotch Bonnet", image: p16, price: 3, quantity: 1},
    ]
	
    const addToJar = (/** @type {{ id: any; name?: string; image?: string; price?: number; quantity: any; }} */ ingredient) => {
      for(let item of jar) {
          if(item.id === ingredient.id) {
            ingredient.quantity += 1
            jar = jar;
            return;
          }
      }
      jar = [...jar, ingredient]
    }
	
    const minusIngredient = (/** @type {{ id: any; quantity: number; }} */ ingredient) => {
      for(let item of jar) {
          if(item.id === ingredient.id) {
            if(ingredient.quantity > 1 ) {
              ingredient.quantity -= 1
                jar = jar
            } else {
                jar = jar.filter((jarItem) => jarItem != ingredient)
            }
            return;
          }
      }
    }
	
    const plusIngredient = (/** @type {{ id: any; }} */ ingredient) => {
      for(let item of jar) {
        if(item.id === ingredient.id) {
          item.quantity += 1
          jar = jar;
          return;
        }
      }
    }

	  $: total2 = jar.reduce((sum, item) => sum + item.price * item.quantity, 0)

	import { Col, Container, Row } from 'sveltestrap';

  /**
	 * @type {any[]}
	 */
  let cart = [];
    let products = [
      {id: 1, name: "Apple", image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", price: 2, quantity: 1},
      {id: 2, name: "Winterberries", image: winter, price: 3, quantity: 1},
      {id: 3, name: "Jay's Peach", image: p23, price: 3, quantity: 1},
      {id: 4, name: 'Spices', image: spice, price: 1, quantity: 1},
      {id: 5, name: "Orange", image: "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg", price: 3, quantity: 1},
      {id: 6, name: "Lemon Starburst", image: p22, price: 3, quantity: 1},
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
	
  </script>

<div class="bg-purple-100 justify-center">



    <!--end of modal mode-->
    <hr>
    <p class=" heading text-center ">Est. 1980</p><h1 class="heading">The Seeds Gallery </h1>
    <hr>
    <div class="mt-6 space-y-12 lg:grid lg:grid-cols-6 lg:gap-x-6 lg:space-y-0">
    <div class="group relative">
    <div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    <img src={p22} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
    </div>
    <h3 class="mt-6 text-sm text-gray-500">    
    <div>
    <Button block color="secondary" >Lemonstarburst</Button>
      
    </div>
    </div>

    <div class="group relative">
    <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    <img src={p23} alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
    </div>
    <h3 class="mt-6 text-sm text-gray-500">
    <div>
    <Button block color="secondary" >Chocolate Habanero</Button>

    </div> 
    </div>

    <div class="group relative">
    <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    <img src={p16} alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
    </div>
    <h3 class="mt-6 text-sm text-gray-500">
    <div>
    <Button block color="secondary" >Scotch Bonnet</Button>
    </div> 
    </div>

    <div class="group relative">
    <div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    <img src={p21} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
    </div>
    <h3 class="mt-6 text-sm text-gray-500">    
    <div>
    <Button block color="secondary" >Trinidad Scorpion</Button>
      
    </div>
    </div>

    <div class="group relative">
    <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
    </div>
    <h3 class="mt-6 text-sm text-gray-500">
    <div>
    <Button block color="secondary" >7 Pot Brains</Button>

    </div> 
    </div>

    <div class="group relative">
    <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    <img src={p5} alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
    </div>
    <h3 class="mt-6 text-sm text-gray-500">
    <div>
    <Button block color="secondary" >Moruga Scorpion</Button>
    </div> 
    </div>
    </div>

    <!--end of modal mode-->

    <!--end of modal mode-->
    <div class="mt-6 space-y-12 lg:grid lg:grid-cols-6 lg:gap-x-6 lg:space-y-0">
    <div class="group relative">
    <div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    <img src={p44} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
    </div>
    <h3 class="mt-6 text-sm text-gray-500">    
    <div>
    <Button block color="secondary" >Bleeding Borg 9</Button>
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
    <Button block color="secondary" >White Thai</Button>

    </div> 
    </div>

    <div class="group relative">
    <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    <img src={p17} alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
    </div>
    <h3 class="mt-6 text-sm text-gray-500">
    <div>
    <Button block color="secondary" >Amnesia Peppers</Button>

    </div> 
    </div>

    <div class="group relative">
    <div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
    </div>
    <h3 class="mt-6 text-sm text-gray-500">    
    <div>
    <Button block color="secondary" >Aji LemonDrop</Button>
      
    </div>
    </div>

    <div class="group relative">
    <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    <img src={p23} alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
    </div>
    <h3 class="mt-6 text-sm text-gray-500">
    <div>
    <Button block color="secondary" >Jay's Peach Scorpion</Button>

    </div> 
    </div>

    <div class="group relative">
    <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
    </div>
    <h3 class="mt-6 text-sm text-gray-500">
    <div>
    <Button block color="secondary" >Carolina Reaper</Button>

    </div> 
    </div>
    </div>

    <!--end of modal mode-->

    <!-- Product List -->

      <div class="mt-6 mb-6 bg-green-100">
        <Container class="justify-center">
          <Row >
            <Col xs="9">
              <!-- animation -->
              <div>
                <Router>
                <header>
                  <nav>
                    
                  <Link to="cart">Additional Ingredients</Link>
                  <Link to="jar">Mixing Jar</Link>
                  </nav>
                </header>
                
                <main>
              
                  <Route path="cart">
                    
                    <p>There are {jar.length} items in your jar</p>
                    <div class="ingredient-list ">
                      {#each ingredients as ingredient}
                      <div>
                        <div class="image card shadow border-3 aspect-w-3 aspect-h-4 hidden rounded-lg lg:block" style="background-image: url({ingredient.image})"></div>
                      <h5>{ingredient.name}</h5>
                      <p>${ingredient.price}</p>
                      <button on:click={() => addToJar(ingredient)}>Add to jar</button>
                      </div>
                      {/each}
                    </div>
                  </Route>
                
                  <Route path="jar">
                    <div class="jar-list">
                      {#each jar as item }
                        {#if item.quantity > 0}
                        <div class="jar-item">
                          <img width="100" src={item.image} alt={item.name}/>
                          <div >{item.quantity}
                            <button on:click={() => plusIngredient(item)}>+</button>
                            <button on:click={() => minusIngredient(item)}>-</button>
                          </div>
                          <p>${item.price * item.quantity}</p>
                        </div>
                        {/if}
                      {/each}
                      <div class="total">
                        <h4>Total: $ {total2}</h4>
                      </div>
                    </div>
                  </Route>
                </main>
                </Router>
            </div>
              <!-- animation -->
            </Col>
            <Col xs="3">
              <Row>
                <Col>
                  <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                     <h2 > <img  class="inline-block" width=50px height=50px src={spices} />Ingredients</h2>
                     <hr>
                    <p> oo Vinegar, Honey, Lemon, Sugar, Salt oo </p>
                    <img src={jars} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <p></p>
          </Row>
        </Container> 
      </div>

      
      


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
      <!-- Image gallery -->
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
      <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img src={p19} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
      </div>
      <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div class="card shadow border-3 aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img src={p25} alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
        </div>
        <div class="card shadow border-3 aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
          <img src={p45} alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
        </div>
      </div>
      <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
        <Container>
          <Row>
            <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
          <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
          <hr>
          </Row>
          <Row>
            <hr>
          <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
          <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
          

            <Button id="btn">Click me</Button>
            <Popover placement="right" target="btn">
              <div slot="title">
                <i>Hello</i> <b>World!</b>
              </div>
              This Popover has HTML in the title passed as a slot.
            </Popover>
          </Row>
        </Container>
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
        <Container>
            <Row>
              <Col>
                
                    <div class="mt-4">
                    <!-- svelte-ignore a11y-no-redundant-roles -->
                    <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                      <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>
        
                      <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>
        
                      <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
        
                      <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
                    </ul>
                  </div>
                
              </Col>
              <Col>

                    <div class="mt-4">
                    <!-- svelte-ignore a11y-no-redundant-roles -->
                    <ul role="list" class="list-disc space-y-2 pl-4 text-sm">
                      <li class="text-gray-400"><span class="text-gray-600">Hand cut and sewn locally</span></li>
        
                      <li class="text-gray-400"><span class="text-gray-600">Dyed with our proprietary colors</span></li>
        
                      <li class="text-gray-400"><span class="text-gray-600">Pre-washed &amp; pre-shrunk</span></li>
        
                      <li class="text-gray-400"><span class="text-gray-600">Ultra-soft 100% cotton</span></li>
                    </ul>
                  </div>
                
              </Col>
            
            </Row>
            <Row>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src={winterberry} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src={yellow} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src={berries} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>

            </Row>
          </Container>
          </div>


        <div class="mt-10">
          <h2 class="text-sm font-medium text-gray-900">Details</h2>

          <div class="mt-4 space-y-6">
            <p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
          </div>
        </div>
      </div>

      <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
        <img src={p42} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
      </div>
      </div>
      </div>
      </div>

      <!--section2-->
      <div>
      <Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Collectibles</h1></Button>
      </div>

      <h1></h1>
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
          <img src={p26} />
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
          <img src={p11} />
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
          <img src={p22} />
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
          <img src={p16} />
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
</div>


  <div class="card shadow border-2 mt-6 space-y-12 lg:grid lg:grid-cols-6 lg:gap-x-6 lg:space-y-0">
    <div class="group relative">
      <div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img src={p18} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
      </div>
    </div>
  </div>
  <div>
    <p></p>
  </div>

  <div class="bg-green-100 justify-center">
    <div class="mt-6 mb-6">
      <Container class="justify-center">
        <Row >
          <Col xs="3">
            <Row>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <h2 > <img  class="inline-block" width=50px height=50px src={spices} />Ingredients</h2>
                     <hr>
                    <p> oo Vinegar, Honey, Lemon, Sugar, Salt oo </p>
                  <img src={pepper} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>

            </Row>
          </Col>
          <Col xs="9">
            <!-- animation -->
            <div>
              <Router>
               <header>
                 <nav>
                 <Link to="/">Additional Ingredients</Link>
                 <Link to="about">Mixing Jar</Link>
                 </nav>
               </header>
               
               <main>
             
                 <Route path="/">
                   <p>There are {cart.length} items in your jar</p>
                   <div class="product-list ">
                     {#each products as product}
                     <div>
                       <div class="image card shadow border-3 aspect-w-3 aspect-h-4 hidden rounded-lg lg:block" style="background-image: url({product.image})"></div>
                     <h5>{product.name}</h5>
                     <p>${product.price}</p>
                     <button on:click={() => addToCart(product)}>Add to jar</button>
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
                         <div >{item.quantity}
                           <button on:click={() => plusItem(item)}>+</button>
                           <button on:click={() => minusItem(item)}>-</button>
                         </div>
                         <p>${item.price * item.quantity}</p>
                       </div>
                       {/if}
                     {/each}
                     <div class="total">
                       <h4>Total: $ {total}</h4>
                     </div>
                   </div>
                 </Route>
               </main>
               </Router>
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
    .heading {
      font-family: 'Courier New', monospace;
      font-weight: bold
    }
    .card:hover{
    box-shadow: 8px 8px 8px blue;
    transform:scale(1.2);
    }

    .product-list {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      height: 250px;
      width: 250px;
    }

    .cart-item {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      height: 250px;
      width: 250px;
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

    .ingredient-list{
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      height: 250px;
      width: 250px;
    }
    
    .jar-item {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      height: 250px;
      width: 250px;
    }
    .image {
      height: 150px;
      width: 150px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
    .total2 {
      text-align: right;
    }
    
    .jar-list {
      border: 1px solid;
      padding: 1px;
    }
  </style>