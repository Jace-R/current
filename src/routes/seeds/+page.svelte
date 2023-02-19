<script lang="ts">

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
  import p46 from '$lib/images/peppers/46.jpg'
  import jars from '$lib/images/peppers/jars.jpg'
  import pepper from '$lib/images/peppers/pepper.jpg'
  import sauce from '$lib/images/peppers/sauce1.jpg'
  import berries from '$lib/images/peppers/straw.jpg'
  import winter from '$lib/images/peppers/winter.jpg'
  import winterberry from '$lib/images/peppers/winter2.jpg'
  import yellow from '$lib/images/peppers/yellow.jpg'
  import spice1 from '$lib/images/peppers/spice1.png'
  import spice2 from '$lib/images/peppers/spice2.jpg'
  import equal from '$lib/images/peppers/equal.png'
  import yellow1 from '$lib/images/peppers/yellow.jpg'
  
  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { Col, Container, Row } from 'sveltestrap';
  import { quintOut } from "svelte/easing";
  import { Popover } from 'sveltestrap';
  import bottles from '$lib/images/bottles.png';

  import {
    Carousel,
    CarouselControl,
    CarouselIndicators,
    CarouselItem
  } from 'sveltestrap';
  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader
  } from 'sveltestrap';

  let open = false;
  const toggle = () => (open = !open);
  
  

  let cart: any[] = [];
	let products = [
		{id: 1, name: "Ghostly Peach Scorpion", image: p39, price: 12, quantity: 1},
		{id: 2, name: "Pineapple LemonStarrburst", image: p40, price: 10, quantity: 1},
		{id: 3, name: "Berry Peach Lava", image: p41, price: 13, quantity: 1},
		{id: 4, name: "Strawberry Scorpion Inferno", image: p42, price: 15, quantity: 1},
		];

	
	const addToCart = (product: { id: any; quantity: number; }) => {
		for(let item of cart) {
				if(item.id === product.id) {
					product.quantity += 1
					cart = cart;
					return;
				}
		}
		cart = [...cart, product]
	}
	
	const minusItem = (product: { id: any; quantity: number; }) => {
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
	
	const plusItem = (product: { id: any; }) => {
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




<svelte:head>
	<title>Peppers</title>
	<meta name="description" content="About this app" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
</svelte:head>

<!-- Packages -->
<span></span>
<span></span>
<span></span>
<div class="relative overflow-hidden bg-blue-100">
	<div class="pt-16 pb-80 mt-5 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
		<div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
			<div class="sm:max-w-lg">
			<h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
			<p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
			</div>
			<div>
			<div class="mt-15">
				<!-- Decorative image grid -->
				<div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
				<div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
					<div class="flex items-center space-x-6 lg:space-x-8">
					<div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
						<div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
						<img src={p14} alt="" class="h-full w-full object-cover object-center">
						</div>
						<div class="h-64 w-44 overflow-hidden rounded-lg">
						<img src={p11} alt="" class="h-full w-full object-cover object-center">
						</div>
					</div>
					<div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
						<div class="h-64 w-44 overflow-hidden rounded-lg">
						<img src={p18} alt="" class="h-full w-full object-cover object-center">
						</div>
						<div class="h-64 w-44 overflow-hidden rounded-lg">
						<img src={p33} alt="" class="h-full w-full object-cover object-center">
						</div>
						<div class="h-64 w-44 overflow-hidden rounded-lg">
						<img src={p23} alt="" class="h-full w-full object-cover object-center">
						</div>
					</div>
					<div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
						<div class="h-64 w-44 overflow-hidden rounded-lg">
						<img src={p22} alt="" class="h-full w-full object-cover object-center">
						</div>
						<div class="h-64 w-44 overflow-hidden rounded-lg">
						<img src={p21} alt="" class="h-full w-full object-cover object-center">
						</div>
					</div>
					</div>
				</div>
				</div>

				<a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</a>
			</div>
			</div>
		</div>
	</div>
</div>
<!-- Packages -->

<!-- Packages for Hot Sauces-->

<div class="bg-purple-100">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	  <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-20">
		<Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Selections</h1></Button>
		
  
		<div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-3 lg:space-y-0">
		  <div class="group relative">
			<div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">    
				<div>
				  <Button block color="secondary" >Pineapple Lemonstarburst</Button>
					  
				</div>
		  </div>
  
		  <div class="group relative">
			<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">
			  <div>
				<Button block color="secondary" >Strawberry Scorpion Inferno</Button>
					
			  </div> 
		  </div>
  
		  <div class="group relative">
			<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">
			  <div>
				<Button block color="secondary" >Berry Peach Lava</Button>
					
			  </div> 
		  </div>

		  <div class="group relative">
			<div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">    
				<div>
				  <Button block color="secondary" >Mango Madness</Button>
					  
				</div>
		  </div>
  
		  <div class="group relative">
			<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">
			  <div>
				<Button block color="secondary" >Ghostly Peach Scorpion</Button>
					
			  </div> 
		  </div>
  
		  <div class="group relative">
			<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">
			  <div>
				<Button block color="secondary" >Deadly Apple Thai</Button>
					
			  </div> 
		  </div>

		</div>
	<div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
	  <div class="group relative">
		<div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
		<img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
		</div>
		<h3 class="mt-6 text-sm text-gray-500">
		  <div>
			<Button block color="secondary" >Pear Me</Button>
				
		  </div> 
	  </div>
  
	  <div class="group relative">
		<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
		<img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
		</div>
		<h3 class="mt-6 text-sm text-gray-500">
		  <div>
			<Button block color="secondary" >Spare Me</Button>
				
		  </div>  
	  </div>
  
	  <div class="group relative">
		<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
		<img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
		</div>
		<h3 class="mt-6 text-sm text-gray-500">
		  <div>
			<Button block color="secondary" >Chocolate Bites</Button>
				
		  </div>  
	  </div>
	  </div>
	  </div>
	</div>
  </div>
  

  <!-- Product List -->
  <section class="bg-blue-100">
	<h1>Select Product(s) </h1>
	<p></p>
    <div class="product-list mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 ">
		
		{#each products as product}
				<div>
					<div class="image card shadow border-3 aspect-w-3 aspect-h-4 hidden rounded-lg lg:block" style="background-image: url({product.image})"></div>
                      <h4>{product.name}</h4>
						<p>${product.price}</p>
						<button on:click={() => addToCart(product)}>Add to Bag</button>
				</div>
			{/each}   
    </div>
	<p></p>
	<p class="text-success"><b><h1>There are {cart.length} items in your Bag</h1></b></p>

  <div class="cart-list">
    {#each cart as item }
      {#if item.quantity > 0}
      <div class="cart-item text-success">
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
  </section>

  
<!-- Product List -->

 <!--Collectibles-->
 <div class="card shadow border-2 mt-6 space-y-12 lg:grid lg:grid-cols-6 lg:gap-x-6 lg:space-y-0">
    <div class="group relative">
      <div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img src={p23} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
      </div>
    </div>
</div>
	<div>
		<p></p>
	</div>

  <div class="bg-purple-100 justify-center">
    <div class="mt-6 mb-6">
      <Container class="justify-center pt-2 pb-2">
		<Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Collectibles</h1></Button>
		<h1></h1>
        <Row >
          <Col xs="6">
            <Row>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>

            </Row>
          </Col>
          <Col xs="6">
            <Row>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>

            </Row>
          </Col>
        </Row>
		<h1></h1>
        <Row >
          <Col xs="6">
            <Row>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>

            </Row>
          </Col>
          <Col xs="6">
            <Row>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>
              <Col>
                <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                  <img src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg" alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
                </div>
              </Col>

            </Row>
          </Col>
        </Row>
      </Container> 
    </div>
    
  </div>
  <!--Collectibles-->
  
  
<section>
	<div class="bg-blue-100" >
		<div class="mx-auto max-w-2xl py-5 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-8">
			<div class="container second mt-5 mb-5" style="background-image: url('{spice1}'); background-size: cover;">
				
				<Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Red Pepper Sauce</h1></Button>
			
			</div>
			<div class="border border-style: solid;">
				</div>
			
		  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
			<div class="group relative">
			  <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
				<img src={p44} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
			  </div>
			  <div class="mt-4 flex justify-between">
		
					<Button block>Bleeding Borg 9</Button>
				
				<!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
			  </div>
			</div>
	  
			<div class="group relative">
				<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
				  <img src={p3} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
				</div>
				<div class="mt-4 flex justify-between">
					<Button block>Block</Button>
				  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
				</div>
			  </div>

			  <div class="group relative">
				<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
				  <img src={p5} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
				</div>
				<div class="mt-4 flex justify-between">
					<Button block>Moruga Scorpion</Button>
				  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
				</div>
			  </div>

			  <div class="group relative">
				<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
				<img src={p11} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
				</div>
				<div class="mt-4 flex justify-between">
					<Button block>Block</Button>
				  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
				</div>
			  </div>

			  <div class="group relative">
				<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
				  <img src={p12} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
				</div>
				<div class="mt-4 flex justify-between">
					<Button block>Block</Button>
				  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
				</div>
			  </div>
		
			  <div class="group relative">
				  <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
					<img src={p16} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
				  </div>
				  <div class="mt-4 flex justify-between">
					<Button block>Scotch Bonnet</Button>
					<!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
				  </div>
				</div>
  
				<div class="group relative">
				  <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
					<img src={p25} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
				  </div>
				  <div class="mt-4 flex justify-between">
					<Button block>Block</Button>
					<!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
				  </div>
				</div>
  
				<div class="group relative">
				  <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
					<img src={p21} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
				  </div>
				  <div class="mt-4 flex justify-between">
					<Button block>Trinidad Scorpion</Button>
					<!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
				  </div>
				</div>
			  <!-- more products -->
		  </div>
		</div>

		<div class="mx-auto max-w-2xl py-5 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-8">
			<div class="container second mt-5 mb-5" style="background-image: url('{spice1}'); background-size: cover;">
				<Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Orange Pepper Sauce</h1></Button>
			</div>
			<hr>
				<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					<div class="group relative">
					  <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
						<img src={p23} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
					  </div>
					  <div class="mt-4 flex justify-between">
				
							<Button block>Jay's Peach Scorpion</Button>
						
						<!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
					  </div>
					</div>
			  
					<div class="group relative">
						<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
						  <img src={p16} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
						</div>
						<div class="mt-4 flex justify-between">
							<Button block>Scotch Bonnet</Button>
						  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
						</div>
					  </div>
		
					  <div class="group relative">
						<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
						  <img src={p5} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
						</div>
						<div class="mt-4 flex justify-between">
							<Button block>White Thai</Button>
						  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
						</div>
					  </div>
		
					  <div class="group relative">
						<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
						<img src={p11} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
						</div>
						<div class="mt-4 flex justify-between">
							<Button block>Aji LemonDrop</Button>
						  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
						</div>
					  </div>
		
					  <!-- more products -->
				  </div>
			</div>
		  
			<div class="mx-auto max-w-2xl py-5 px-4 sm:py-24 sm:px-6 lg:max-w-6xl lg:px-8">
				<div class="container second mt-5 mb-5" style="background-image: url('{spice1}'); background-size: cover;">
					<Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Yellow Pepper Sauce</h1></Button>
				</div>
				<hr>
			  <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
				<div class="group relative">
				  <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
					<img src={p22} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
				  </div>
				  <div class="mt-4 flex justify-between">
			
						<Button block>LemonStarrburst</Button>
					
					<!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
				  </div>
				</div>
		  
				<div class="group relative">
					<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
					  <img src={p26} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
					</div>
					<div class="mt-4 flex justify-between">
						<Button block>Jay's Peach Scorpion</Button>
					  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
					</div>
				  </div>
	
				  <div class="group relative">
					<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
					  <img src={p5} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
					</div>
					<div class="mt-4 flex justify-between">
						<Button block>White Thai</Button>
					  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
					</div>
				  </div>
	
				  <div class="group relative">
					<div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
					<img src={p11} alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
					</div>
					<div class="mt-4 flex justify-between">
						<Button block>Aji LemonDrop</Button>
					  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
					</div>
				  </div>
	
				  <!-- more products -->
			  
			</div>
	

		</div>
	  
		
	  </div>

	  <div class="bg-purple-100" >
		<div class="container">
			<div class="bg-purple-100">
				<div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-400 lg:pt-6 lg:pb-16 lg:pr-8" >
							
					
							<Container>
								<Row>
									<Col>
										<!-- Description and details -->
										<div>
										<h3 class="sr-only">Description</h3>
						
											<div class="space-y-6">
												<p class="text-base text-gray-900">The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: &quot;Black&quot;. Need to add an extra pop of color to your outfit? Our white tee has you covered.</p>
											</div>
										</div>
						
										
										<Col xs="6">
											<Row>
											  <Col>
												<div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
												  <img src={berries} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
												</div>
											  </Col>
											  <Col>
												<div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
												  <img src={p16} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
												</div>
											  </Col>
											  <Col>
												<div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
												  <img src={spice2} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
												</div>
											  </Col>
											  <Col>
												<div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
												  <img src={equal} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
												</div>
											  </Col>
											  <Col>
												<div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
												  <img src={p41} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
												</div>
											  </Col>
								
											</Row>
										  </Col>
					
										<div class="mt-10">
										<h2 class="text-sm font-medium text-gray-900">Details</h2>
								
										<div class="mt-4 space-y-6">
											<p class="text-sm text-gray-600">The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming &quot;Charcoal Gray&quot; limited release.</p>
										</div>
										</div>
										<Col xs="6">
											<Row>
											  <Col>
												<div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
												  <img src={winterberry} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
												</div>
											  </Col>
											  <Col>
												<div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
												  <img src={p23} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
												</div>
											  </Col>
											  <Col>
												<div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
												  <img src={spice2} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
												</div>
											  </Col>
											  <Col>
												<div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
												  <img src={equal} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
												</div>
											  </Col>
											  <Col>
												<div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
												  <img src={p40} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
												</div>
											  </Col>
								
											</Row>
										  </Col>
									</Col>
									<Col>
										<img src={jars} />
									</Col>
								</Row>
							</Container>
						
					</div>
				</div>
			</div>
		
		<section>
			<div class="container" >
				<div class="bg-secondary">
					<!-- Image gallery -->
				<div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
					<div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
					  <img src={winter} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
					</div>
					<div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
					  <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
						<img src={yellow} alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
					  </div>
					  <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
						<img src={spice1} alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
					  </div>
					</div>
					<div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
					  <img src={p40} alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center">
					</div>
				  </div>
				</div>
			</div>
		</section>	
	  </div>
</section>
<section>
	<div class="bg-blue-100">
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
			<img src={p37} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
			<img src={p22} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
			<img src={p18} alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100">
			<img src={spice2} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100">
		  </div>
		</div>
	  </div>
</section>

 



<style>
	.product-list, .cart-item {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
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

	.container {
	text-align: center;
	color: var(--color);
	width: 100%;
	min-height: 15vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	
	
	/*  this is where the magic happens:  */
	background-attachment: fixed;
	}

	
</style>