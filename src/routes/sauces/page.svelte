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

	  import {
		Button,
		Modal,
		ModalBody,
		ModalFooter,
		ModalHeader
	  } from 'sveltestrap';
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
				  <Button block color="secondary" >Pineapple Lemonstarburst</Button>
					
				</div>
		  </div>
  
		  <div class="group relative">
			<div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
			  <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
			</div>
			<h3 class="mt-6 text-sm text-gray-500">
			  <div>
				<Button block color="secondary" >Strawberry Inferno</Button>
				
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