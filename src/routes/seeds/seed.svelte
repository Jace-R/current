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

  import { fade, blur, fly, slide, scale } from "svelte/transition";
  import { Col, Container, Row } from 'sveltestrap';
  import { quintOut } from "svelte/easing";
  import { Popover } from 'sveltestrap';

  import { Router, Route, Link } from "svelte-navigator";
  import Seed from './seed.svelte';
	let visible = false;

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
  
  let books: any[] = 
  	[
    	
  	];

  setInterval(() => {
   //logic goes here
  }, 1000);

    const items = [
		p40,
		p39,
		p41
  ];
  let activeIndex = 0;

  let cart: any[] = [];
	let products = [
		{id: 1, name: "Apple", image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", price: 10, quantity: 1},
		{id: 2, name: "Orange", image: "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg", price: 11, quantity: 1},
		{id: 3, name: "Grapes", image: "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg", price: 12, quantity: 1},
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

<label>
	<input type="checkbox" bind:checked={visible}>
	<p class="text-white">Hot Sauce Gallery </p>
</label>

{#if visible}
	<div transition:fly="{{ y: 200, duration: 2000 }}">
		<p>> Collectibles </p>
  </div>
{/if}

<!-- Carousel -->
<div class="bg-gray-100">
	<Container >
		<Row>
			<Col xs="6">
				<section style="display:flex;justify-content:center">
					{#each books as book, i}
					  {#if activeIndex === i}
						<img
						  transition:scale={{ delay: 250, duration: 300, easing: quintOut }}
						  style="position:absolute"
						  src={book}
						  width="500"
						  height="300"
						  alt=""
						/>
					  {/if}
					{/each}
				  </section>
				  <Carousel {items} bind:activeIndex>
					<CarouselIndicators bind:activeIndex {items} />
				  
					<div class="carousel-inner">
					  {#each items as item, index}
						<CarouselItem bind:activeIndex itemIndex={index}>
						  <img src={item} class="d-block w-100" alt={`${item} ${index + 1}`} />
						</CarouselItem>
					  {/each}
					</div>
				  
					<CarouselControl direction="prev" bind:activeIndex {items} />
					<CarouselControl direction="next" bind:activeIndex {items} />
				  </Carousel>
			</Col>
			<Col xs="6">
				<div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
					<div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
						<div class="sm:max-w-lg">
							<h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
							<p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
						</div>
						<a href="#" class="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">Shop Collection</a>
					</div>
				</div>
				
				</Col>
		</Row>
		
	</Container>
</div>

<!-- Carousel -->

<!-- Packages -->
<span></span>
<span></span>
<span></span>
<div class="relative overflow-hidden bg-gray-100">
<div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
  <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
    <div class="sm:max-w-lg">
      <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Summer styles are finally here</h1>
      <p class="mt-4 text-xl text-gray-500">This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care if you live or die.</p>
    </div>
    <div>
      <div class="mt-10">
        <!-- Decorative image grid -->
        <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
          <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
            <div class="flex items-center space-x-6 lg:space-x-8">
              <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" class="h-full w-full object-cover object-center">
                </div>
                <div class="h-64 w-44 overflow-hidden rounded-lg">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" class="h-full w-full object-cover object-center">
                </div>
              </div>
              <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div class="h-64 w-44 overflow-hidden rounded-lg">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" class="h-full w-full object-cover object-center">
                </div>
                <div class="h-64 w-44 overflow-hidden rounded-lg">
                  <img src={p33} alt="" class="h-full w-full object-cover object-center">
                </div>
                <div class="h-64 w-44 overflow-hidden rounded-lg">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" class="h-full w-full object-cover object-center">
                </div>
              </div>
              <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div class="h-64 w-44 overflow-hidden rounded-lg">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" class="h-full w-full object-cover object-center">
                </div>
                <div class="h-64 w-44 overflow-hidden rounded-lg">
                  <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" class="h-full w-full object-cover object-center">
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

<div class="bg-gray-100">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	  <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
		<h2 class="text-2xl font-bold text-gray-900">Selections</h2>
  
		<div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
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
	<div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
	  <div class="group relative">
		<div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
		<img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
		</div>
		<h3 class="mt-6 text-sm text-gray-500">
		  <div>
			<Button block color="secondary" on:click={toggle}>Pear Me</Button>
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
			<Button block color="secondary" on:click={toggle}>Spare Me</Button>
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
			<Button block color="secondary" on:click={toggle}>Chocolate Bites</Button>
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
	  </div>
	</div>
  </div>
  

  <!-- Product List 
  <section class="bg-gray-100">
    <div class="product-list mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
		{#each products as product}
				<div>
					<div class="image" style="background-image: url({product.image})"></div>
				<h4>{product.name}</h4>
				<p>₹{product.price}</p>
				<button on:click={() => addToCart(product)}>Add to cart</button>
				</div>
			{/each}   
    </div>
  </section>
  <p>There are {cart.length} items in your cart</p>

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
 Product List -->

  
<section>
	<div class="bg-gray-100" >
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
				<!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
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
				  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
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
				  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
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
				  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
				</div>
			  </div>

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
				  <!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
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
					<!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
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
					<!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
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
					<!--<p class="text-sm font-medium text-secondary-900">$35</p> -->
				  </div>
				</div>
			  <!-- more products -->
		  </div>
		</div>
	  </div>

	  <div class="bg-gray-100" >
		<div class="container">
			<div class="bg-gray-100">
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
				<div class="bg-secondary">
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
	<div class="bg-gray-100">
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
</style>