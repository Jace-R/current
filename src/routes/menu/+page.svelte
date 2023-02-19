<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->

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
  import p45 from '$lib/images/hots/1.jpg'
  import p46 from '$lib/images/hots/2.jpg'
  import p47 from '$lib/images/hots/3.jpg'
  import p48 from '$lib/images/hots/4.jpg'
  import p49 from '$lib/images/hots/5.jpg'
  import p50 from '$lib/images/hots/6.jpg'
  import p51 from '$lib/images/hots/7.jpg'
  import p52 from '$lib/images/hots/8.jpg'
  import p53 from '$lib/images/hots/9.jpg'
  import p54 from '$lib/images/hots/10.jpg'
  import p55 from '$lib/images/hots/11.jpg'
  import p56 from '$lib/images/hots/12.jpg'
  import p57 from '$lib/images/hots/13.jpg'
  import p58 from '$lib/images/hots/14.jpg'
  import p59 from '$lib/images/hots/15.jpg'
  import p60 from '$lib/images/hots/16.jpg'
  import p61 from '$lib/images/hots/17.jpg'
  import p62 from '$lib/images/hots/18.jpg'
  import p63 from '$lib/images/hots/19.jpg'
  import p64 from '$lib/images/hots/20.jpg'
  import p65 from '$lib/images/hots/21.jpg'
  import p66 from '$lib/images/hots/22.jpg'
  import p67 from '$lib/images/hots/23.jpg'
  import p68 from '$lib/images/hots/24.jpg'
  import p69 from '$lib/images/hots/27.jpg'
  import p70 from '$lib/images/hots/30.jpg'
  import p71 from '$lib/images/hots/31.jpg'
  import p72 from '$lib/images/hots/32.jpg'
  import p73 from '$lib/images/hots/33.jpg'
  import p74 from '$lib/images/hots/34.jpg'
  import p75 from '$lib/images/hots/35.jpg'
  import p76 from '$lib/images/hots/36.jpg'
  import p77 from '$lib/images/hots/37.jpg'
  import p78 from '$lib/images/hots/38.jpg'
  import p79 from '$lib/images/hots/39.jpg'
  import p80 from '$lib/images/hots/40.jpg'
  import p81 from '$lib/images/hots/41.jpg'
  import p82 from '$lib/images/hots/43.jpg'
  import spice1 from '$lib/images/peppers/spice1.png'
  import spice2 from '$lib/images/peppers/spice2.jpg'

  import Collections from './collections.svelte'

  import {
    Button,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader, 
    Container, Row, Col
  } from 'sveltestrap';
  import { Popover } from 'sveltestrap';
  import chilis from '$lib/images/chilis.png';

  let open = false;
  const toggle = () => (open = !open);

  import { Router, Route, Link } from "svelte-navigator";
  import Layer from './layer.svelte';
  import { fly } from 'svelte/transition';
	let visible = true;
</script>


	<div transition:fly="{{ y: 200, duration: 2000 }}">

    
     
   

		<div class="bg-red-100 mt-5">
      <Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Stinging Hot Peppers</h1></Button>
      
      <div class="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div class="flex items-center">
                <a href="./hotsauce" class="mr-2 text-sm font-medium text-gray-900">Seeds</a>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
    
            <li>
              <div class="flex items-center">
                <a href="./mildlyhot" class="mr-2 text-sm font-medium text-gray-900">Mildly Hot Sauce</a>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
    
            <li class="text-sm">
              <a href="./collections" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">Collections</a>
            </li>
          </ol>
        </nav>
    
        <!-- Product info collage -->
        <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 class="text-2xl font-bold tracking-tight text-red-900 sm:text-3xl">Pepper Gallery</h1>
            <p></p>
          </div>
    
          <!-- Options -->
          <div class="mt-4 lg:row-span-3 lg:mt-0">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">Mildly Hot Peppers</p>
    
            <!-- Reviews -->
            <div class="mt-6">
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center">
                <div class="flex items-center">
                  <!--
                    Heroicon name: mini/star
    
                    Active: "text-gray-900", Default: "text-gray-200"
                  -->
                  <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
    
                  <!-- Heroicon name: mini/star -->
                  <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
    
                  <!-- Heroicon name: mini/star -->
                  <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
    
                  <!-- Heroicon name: mini/star -->
                  <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
    
                  <!-- Heroicon name: mini/star -->
                  <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="sr-only">4 out of 5 stars</p>
                <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
              </div>
            </div>
    
            <form class="mt-10">
              <!-- Colors -->
              <div>
                <h3 class="text-sm font-medium text-gray-900">Color</h3>
    
                <fieldset class="mt-4">
                  <legend class="sr-only">Choose a color</legend>
                  <div class="flex items-center space-x-3">
                    <!--
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    -->
                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                      <input type="radio" name="color-choice" value="White" class="sr-only" aria-labelledby="color-choice-0-label">
                      <span id="color-choice-0-label" class="sr-only"> White </span>
                      <span aria-hidden="true" class="h-8 w-8 bg-gray-100  border border-black border-opacity-10 rounded-full"></span>
                    </label>
                    <!--
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    -->
                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                      <input type="radio" name="color-choice" value="Yellow" class="sr-only" aria-labelledby="color-choice-0-label">
                      <span id="color-choice-0-label" class="sr-only"> Yellow </span>
                      <span aria-hidden="true" class="h-8 w-8 bg-yellow-200  border border-black border-opacity-10 rounded-full"></span>
                    </label>
    
                    <!--
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    -->
                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                      <input type="radio" name="color-choice" value="Orange" class="sr-only" aria-labelledby="color-choice-1-label">
                      <span id="color-choice-1-label" class="sr-only"> Orange </span>
                      <span aria-hidden="true" class="h-8 w-8  bg-orange-400 border border-black border-opacity-10 rounded-full"></span>
                    </label>
    
                    <!--
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    -->
                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                      <input type="radio" name="color-choice" value="Red" class="sr-only" aria-labelledby="color-choice-2-label">
                      <span id="color-choice-2-label" class="sr-only"> Red </span>
                      <span aria-hidden="true" class="h-8 w-8 bg-red-500 border border-black border-opacity-10 rounded-full"></span>
                    </label>

                    <!--
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    -->
                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                      <input type="radio" name="color-choice" value="Purple" class="sr-only" aria-labelledby="color-choice-2-label">
                      <span id="color-choice-2-label" class="sr-only"> Purple </span>
                      <span aria-hidden="true" class="h-8 w-8 bg-green-400 border border-black border-opacity-10 rounded-full"></span>
                    </label>


                    <!--
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    -->
                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                      <input type="radio" name="color-choice" value="Purple" class="sr-only" aria-labelledby="color-choice-2-label">
                      <span id="color-choice-2-label" class="sr-only"> Purple </span>
                      <span aria-hidden="true" class="h-8 w-8 bg-green-700 border border-black border-opacity-10 rounded-full"></span>
                    </label>

                    <!--
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    -->
                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                      <input type="radio" name="color-choice" value="Purple" class="sr-only" aria-labelledby="color-choice-2-label">
                      <span id="color-choice-2-label" class="sr-only"> Purple </span>
                      <span aria-hidden="true" class="h-8 w-8 bg-purple-700 border border-black border-opacity-10 rounded-full"></span>
                    </label>

                     <!--
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  -->
                  <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                    <input type="radio" name="color-choice" value="Brown" class="sr-only" aria-labelledby="color-choice-2-label">
                    <span id="color-choice-2-label" class="sr-only"> Brown </span>
                    <span aria-hidden="true" class="h-8 w-8 bg-orange-900 border border-black border-opacity-10 rounded-full"></span>
                  </label>
                  
                  </div>
                </fieldset>
              </div>
    
              <!-- Sizes -->
              <div class="mt-10">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                </div>
    
                <fieldset class="mt-4">
                  <legend class="sr-only">Choose a size</legend>
                  <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                      <input type="radio" name="size-choice" value="XXS" disabled class="sr-only" aria-labelledby="size-choice-0-label">
                      <span id="size-choice-0-label">XXS</span>
    
                      <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                        <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                          <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                        </svg>
                      </span>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                      <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label">
                      <span id="size-choice-1-label">XS</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                      <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label">
                      <span id="size-choice-2-label">S</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                      <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label">
                      <span id="size-choice-3-label">M</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                      <input type="radio" name="size-choice" value="L" disabled class="sr-only" aria-labelledby="size-choice-4-label">
                      <span id="size-choice-4-label">L</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                      <input type="radio" name="size-choice" value="XL" disabled class="sr-only" aria-labelledby="size-choice-5-label">
                      <span id="size-choice-5-label">XL</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                      <input type="radio" name="size-choice" value="2XL" disabled class="sr-only" aria-labelledby="size-choice-6-label">
                      <span id="size-choice-6-label">2XL</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                      <input type="radio" name="size-choice" value="3XL" disabled class="sr-only" aria-labelledby="size-choice-7-label">
                      <span id="size-choice-7-label">3XL</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                    </label>
                  </div>
                </fieldset>
              </div>
    
              <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
            </form>
          </div>
    
          <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img src={p37} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
            <img src={p22} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
            <img src={p46} alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100">
            <img src={p18} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100">
            <img src={p45} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
            <img src={p82} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
          </div>
          <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img src={p56} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
            <img src={p77} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
            <img src={p75} alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100">
            <img src={p79} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100">
            <img src={p76} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
            <img src={p74} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
          </div>
        </div>
        <!-- Product info collage -->
    
        <div class="container second mt-5 mb-5" style="background-image: url('{p22}'); background-size: cover;">
          <Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Yellow Pepper Sauce</h1></Button>
        </div>


        <!-- Product info -->
      <div class="mx-auto max-w-2xl px-4 pt-5 pb-5 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Description</h1>
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
          <img src={p40} alt="Two each of gray, white, and black shirts laying flat." class="card h-full w-full object-cover object-center">
        </div>
      </div>
      <!-- Product info -->

      <!-- Image gallery -->
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8 justify-content: center;">
        <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
          <img src={p14} alt="Two each of gray, white, and black shirts laying flat." class="card h-full w-full shadow border-3 object-cover object-center">
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img src={p18} alt="Model wearing plain black basic tee." class="card h-full w-full shadow border-3 object-cover object-center">
          </div>
          <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img src={p22} alt="Model wearing plain gray basic tee." class="card h-full w-full shadow border-3 object-cover object-center">
          </div>
        </div>
        <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
          <img src={p40} alt="Model wearing plain white basic tee." class="card h-full w-full shadow border-3 object-cover object-center">
        </div>
      </div>

        
      </div>
    </div>
    


    <!--section three-->
    <div class="bg-red-100">
      
        <Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Blazingly Hot Peppers</h1></Button>
      
  
      <div class="pt-2">
        <nav aria-label="Breadcrumb">
          <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <li>
              <div class="flex items-center">
                <a href="./hotsauce" class="mr-2 text-sm font-medium text-gray-900">Seeds</a>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
    
            <li>
              <div class="flex items-center">
                <a href="./blazinghot" class="mr-2 text-sm font-medium text-gray-900">Blazingly Hot Sauce</a>
                <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
    
            <li class="text-sm">
              <a href="./collections" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">Collections</a>
            </li>
          </ol>
        </nav>
    
        <!-- Product info collage -->
        <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 class="text-2xl font-bold tracking-tight text-red-900 sm:text-3xl">Pepper Gallery</h1>
            <p></p>
          </div>
    
          <!-- Options -->
          <div class="mt-4 lg:row-span-3 lg:mt-0">
            <h2 class="sr-only">Product information</h2>
            <p class="text-3xl tracking-tight text-gray-900">Hot Peppers</p>
    
            <!-- Reviews -->
            <div class="mt-6">
              <h3 class="sr-only">Reviews</h3>
              <div class="flex items-center">
                <div class="flex items-center">
                  <!--
                    Heroicon name: mini/star
    
                    Active: "text-gray-900", Default: "text-gray-200"
                  -->
                  <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
    
                  <!-- Heroicon name: mini/star -->
                  <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
    
                  <!-- Heroicon name: mini/star -->
                  <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
    
                  <!-- Heroicon name: mini/star -->
                  <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
    
                  <!-- Heroicon name: mini/star -->
                  <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="sr-only">4 out of 5 stars</p>
                <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
              </div>
            </div>
    
            <form class="mt-10">
              <!-- Colors -->
              <div>
                <h3 class="text-sm font-medium text-gray-900">Color</h3>
    
                <fieldset class="mt-4">
                  <legend class="sr-only">Choose a color</legend>
                  <div class="flex items-center space-x-3">

                    <!--
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    -->
                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                      <input type="radio" name="color-choice" value="Yellow" class="sr-only" aria-labelledby="color-choice-0-label">
                      <span id="color-choice-0-label" class="sr-only"> Yellow </span>
                      <span aria-hidden="true" class="h-8 w-8 bg-yellow-400  border border-black border-opacity-10 rounded-full"></span>
                    </label>
                    
                    <!--
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    -->
                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                      <input type="radio" name="color-choice" value="Yellow" class="sr-only" aria-labelledby="color-choice-0-label">
                      <span id="color-choice-0-label" class="sr-only"> Yellow </span>
                      <span aria-hidden="true" class="h-8 w-8 bg-orange-300  border border-black border-opacity-10 rounded-full"></span>
                    </label>
    
                    <!--
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    -->
                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                      <input type="radio" name="color-choice" value="Orange" class="sr-only" aria-labelledby="color-choice-1-label">
                      <span id="color-choice-1-label" class="sr-only"> Orange </span>
                      <span aria-hidden="true" class="h-8 w-8  bg-orange-400 border border-black border-opacity-10 rounded-full"></span>
                    </label>
    
                    <!--
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    -->
                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                      <input type="radio" name="color-choice" value="Red" class="sr-only" aria-labelledby="color-choice-2-label">
                      <span id="color-choice-2-label" class="sr-only"> Red </span>
                      <span aria-hidden="true" class="h-8 w-8 bg-red-500 border border-black border-opacity-10 rounded-full"></span>
                    </label>

                    <!--
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    -->
                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                      <input type="radio" name="color-choice" value="Yellow" class="sr-only" aria-labelledby="color-choice-0-label">
                      <span id="color-choice-0-label" class="sr-only"> Yellow </span>
                      <span aria-hidden="true" class="h-8 w-8 bg-green-400  border border-black border-opacity-10 rounded-full"></span>
                    </label>

                    <!--
                      Active and Checked: "ring ring-offset-1"
                      Not Active and Checked: "ring-2"
                    -->
                    <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-400">
                      <input type="radio" name="color-choice" value="Yellow" class="sr-only" aria-labelledby="color-choice-0-label">
                      <span id="color-choice-0-label" class="sr-only"> Yellow </span>
                      <span aria-hidden="true" class="h-8 w-8 bg-green-700  border border-black border-opacity-10 rounded-full"></span>
                    </label>
                    
                     <!--
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  -->
                  <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                    <input type="radio" name="color-choice" value="Brown" class="sr-only" aria-labelledby="color-choice-2-label">
                    <span id="color-choice-2-label" class="sr-only"> Brown </span>
                    <span aria-hidden="true" class="h-8 w-8 bg-orange-900 border border-black border-opacity-10 rounded-full"></span>
                  </label>
                  </div>
                </fieldset>
              </div>
    
              <!-- Sizes -->
              <div class="mt-10">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
                </div>
    
                <fieldset class="mt-4">
                  <legend class="sr-only">Choose a size</legend>
                  <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                      <input type="radio" name="size-choice" value="XXS" disabled class="sr-only" aria-labelledby="size-choice-0-label">
                      <span id="size-choice-0-label">XXS</span>
    
                      <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                        <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                          <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                        </svg>
                      </span>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-200 cursor-pointer">
                      <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label">
                      <span id="size-choice-1-label">XS</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                        <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                          <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                        </svg>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                      <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label">
                      <span id="size-choice-2-label">S</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                      <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label">
                      <span id="size-choice-3-label">M</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                      <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label">
                      <span id="size-choice-4-label">L</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-200 cursor-pointer">
                      <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label">
                      <span id="size-choice-5-label">XL</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                        <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                          <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                        </svg>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-200 cursor-pointer">
                      <input type="radio" name="size-choice" value="2XL" class="sr-only" aria-labelledby="size-choice-6-label">
                      <span id="size-choice-6-label">2XL</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                        <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                          <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                        </svg>
                    </label>
    
                    <!-- Active: "ring-2 ring-indigo-500" -->
                    <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-200 cursor-pointer">
                      <input type="radio" name="size-choice" value="3XL" class="sr-only" aria-labelledby="size-choice-7-label">
                      <span id="size-choice-7-label">3XL</span>
    
                      <!--
                        Active: "border", Not Active: "border-2"
                        Checked: "border-indigo-500", Not Checked: "border-transparent"
                      -->
                      <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                        <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                          <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                        </svg>
                    </label>
                  </div>
                </fieldset>
              </div>
    
              <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
            </form>
          </div>
    
          <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img src={p37} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
            <img src={p23} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
            <img src={p18} alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100">
            <img src={p50} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100">
            <img src={p37} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
            <img src={p22} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
          </div>
          <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img src={p22} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
            <img src={p25} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
            <img src={p26} alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100">
            <img src={p52} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100">
            <img src={p50} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
            <img src={p53} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
          </div>
        </div>
        <!-- Product info collage -->

        <div class="container second mt-5 mb-5" style="background-image: url('{p22}'); background-size: cover;">
          <Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Orange Pepper Sauce</h1></Button>
        </div>

        
        <!-- Product info -->
        <div class="mx-auto max-w-2xl px-4 pt-5 pb-5 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Description</h1>
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
            <img src={p39} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center shadow border-2 ">
          </div>
        </div>

        <!-- Image gallery -->
        <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <p  >src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
            <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
            <hr>
            <hr>
            <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
            <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
            
            <Button block>Block</Button>
          </div>
          <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img src={p37} alt="Model wearing plain black basic tee." class="card shadow border-3 h-full w-full object-cover object-center">
            </div>
            <div class="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img src={p23} alt="Model wearing plain gray basic tee." class="card shadow border-3 h-full w-full object-cover object-center">
            </div>
          </div>
          <div class="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img src={p15} alt="Two each of gray, white, and black shirts laying flat." class="card shadow border-3 h-full w-full object-cover object-center">
          </div>
        </div>
     
      </div>
    </div>
  <!--section three-->  

 

  <!--section four-->
  <div class="bg-red-100">

    <Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Extremely Hot Peppers</h1></Button>
    <div class="pt-2">
      <nav aria-label="Breadcrumb">\
        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <div class="flex items-center">
              <a href="./hotsauce" class="mr-2 text-sm font-medium text-gray-900">Seeds</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
  
          <li>
            <div class="flex items-center">
              <a href="./extremelyhot" class="mr-2 text-sm font-medium text-gray-900">Extremely Hot Sauce</a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-5 w-4 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
  
          <li class="text-sm">
            <a href="./collections" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">Collections</a>
          </li>
        </ol>
      </nav>
      
      <!-- Product info collage -->
      <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Pepper Gallery</h1>
        </div>
  
        <!-- Options -->
        <div class="mt-4 lg:row-span-3 lg:mt-0">
          <h2 class="sr-only">Product information</h2>
          <p class="text-3xl tracking-tight text-gray-900">Super Hot Peppers</p>
  
          <!-- Reviews -->
          <div class="mt-6">
            <h3 class="sr-only">Reviews</h3>
            <div class="flex items-center">
              <div class="flex items-center">
                <!--
                  Heroicon name: mini/star
  
                  Active: "text-gray-900", Default: "text-gray-200"
                -->
                <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
  
                <!-- Heroicon name: mini/star -->
                <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
  
                <!-- Heroicon name: mini/star -->
                <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
  
                <!-- Heroicon name: mini/star -->
                <svg class="text-gray-900 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
  
                <!-- Heroicon name: mini/star -->
                <svg class="text-gray-400 h-5 w-5 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="sr-only">4 out of 5 stars</p>
              <a href="#" class="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">117 reviews</a>
            </div>
          </div>
  
          <form class="mt-10">
            <!-- Colors -->
            <div>
              <h3 class="text-sm font-medium text-gray-900">Color</h3>
  
              <fieldset class="mt-4">
                <legend class="sr-only">Choose a color</legend>
                <div class="flex items-center space-x-3">
                  
                 <!--
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  -->
                  <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                    <input type="radio" name="color-choice" value="Red" class="sr-only" aria-labelledby="color-choice-2-label">
                    <span id="color-choice-2-label" class="sr-only"> Red </span>
                    <span aria-hidden="true" class="h-8 w-8 bg-orange-400 border border-black border-opacity-10 rounded-full"></span>
                  </label>

                  <!--
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  -->
                  <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                    <input type="radio" name="color-choice" value="Red" class="sr-only" aria-labelledby="color-choice-2-label">
                    <span id="color-choice-2-label" class="sr-only"> Red </span>
                    <span aria-hidden="true" class="h-8 w-8 bg-red-500 border border-black border-opacity-10 rounded-full"></span>
                  </label>


                  <!--
                    Active and Checked: "ring ring-offset-1"
                    Not Active and Checked: "ring-2"
                  -->
                  <label class="-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-gray-900">
                    <input type="radio" name="color-choice" value="Brown" class="sr-only" aria-labelledby="color-choice-2-label">
                    <span id="color-choice-2-label" class="sr-only"> Brown </span>
                    <span aria-hidden="true" class="h-8 w-8 bg-orange-900 border border-black border-opacity-10 rounded-full"></span>
                  </label>
                </div>
              </fieldset>
            </div>
  
            <!-- Sizes -->
            <div class="mt-10">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-medium text-gray-900">Size</h3>
                <a href="#" class="text-sm font-medium text-indigo-600 hover:text-indigo-500">Size guide</a>
              </div>
  
              <fieldset class="mt-4">
                <legend class="sr-only">Choose a size</legend>
                <div class="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-gray-50 text-gray-200 cursor-not-allowed">
                    <input type="radio" name="size-choice" value="XXS" disabled class="sr-only" aria-labelledby="size-choice-0-label">
                    <span id="size-choice-0-label">XXS</span>
  
                    <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                      <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                        <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                      </svg>
                    </span>
                  </label>
  
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-200 cursor-pointer">
                    <input type="radio" name="size-choice" value="XS" class="sr-only" aria-labelledby="size-choice-1-label">
                    <span id="size-choice-1-label">XS</span>
  
                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                      <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                        <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                      </svg>
                    </span>
                  </label>
  
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                    <input type="radio" name="size-choice" value="S" class="sr-only" aria-labelledby="size-choice-2-label">
                    <span id="size-choice-2-label">S</span>
  
                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>
  
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                    <input type="radio" name="size-choice" value="M" class="sr-only" aria-labelledby="size-choice-3-label">
                    <span id="size-choice-3-label">M</span>
  
                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>
  
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-900 cursor-pointer">
                    <input type="radio" name="size-choice" value="L" class="sr-only" aria-labelledby="size-choice-4-label">
                    <span id="size-choice-4-label">L</span>
  
                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span class="pointer-events-none absolute -inset-px rounded-md" aria-hidden="true"></span>
                  </label>
  
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-200 cursor-pointer">
                    <input type="radio" name="size-choice" value="XL" class="sr-only" aria-labelledby="size-choice-5-label">
                    <span id="size-choice-5-label">XL</span>
  
                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                      <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                        <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                      </svg>
                    </span>
                  </label>
  
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-200 cursor-pointer">
                    <input type="radio" name="size-choice" value="2XL" class="sr-only" aria-labelledby="size-choice-6-label">
                    <span id="size-choice-6-label">2XL</span>
  
                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                      <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                        <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                      </svg>
                    </span>
                  </label>
  
                  <!-- Active: "ring-2 ring-indigo-500" -->
                  <label class="group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6 bg-white shadow-sm text-gray-200 cursor-pointer">
                    <input type="radio" name="size-choice" value="3XL" class="sr-only" aria-labelledby="size-choice-7-label">
                    <span id="size-choice-7-label">3XL</span>
  
                    <!--
                      Active: "border", Not Active: "border-2"
                      Checked: "border-indigo-500", Not Checked: "border-transparent"
                    -->
                    <span aria-hidden="true" class="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200">
                      <svg class="absolute inset-0 h-full w-full stroke-2 text-gray-200" viewBox="0 0 100 100" preserveAspectRatio="none" stroke="currentColor">
                        <line x1="0" y1="100" x2="100" y2="0" vector-effect="non-scaling-stroke" />
                      </svg>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
  
            <button type="submit" class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Add to bag</button>
          </form>
        </div>
  
        <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img src={p37} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
          <img src={p60} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
          <img src={p47} alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100">
          <img src={p4} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100">
          <img src={p17} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
          <img src={p25} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
        </div>
        <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img src={p5} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
          <img src={p11} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
          <img src={p81} alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100">
          <img src={p50} alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100">
          <img src={p44} alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100">
          <img src={p80} alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100">
        </div>
      </div>
      <!-- Product info collage -->
  
      <div class="container second mt-5 mb-5" style="background-image: url('{p22}'); background-size: cover;">
        <Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Red Pepper Sauce</h1></Button>
      </div>

      <!-- Product info -->
      <div class="mx-auto max-w-2xl px-4 pt-5 pb-5 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Basic Description</h1>
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
          <img src={p42} alt="Two each of gray, white, and black shirts laying flat." class="card h-full w-full object-cover object-center">
        </div>
      </div>
      

      <!-- Image gallery -->
      <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        <div class="card shadow border-3 aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
          <img src={p3} alt="Two each of gray, white, and black shirts laying flat." class="h-full w-full object-cover object-center">
        </div>
        <div class="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
          <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
          <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
          <Button block>Block</Button>
          <hr>
          <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
          <p>src="https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg" alt="Model wearing plain white basic tee." class="h-full w-full object-cover object-center"</p>
          
          <Button block>Block</Button>
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="card shadow border-3 aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img src={p16} alt="Model wearing plain black basic tee." class="h-full w-full object-cover object-center">
          </div>
          <div class="card shadow border-3 aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
            <img src={p17} alt="Model wearing plain gray basic tee." class="h-full w-full object-cover object-center">
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <!--section four-->  

   <!--Collectibles-->
 <div class="card shadow border-2 mt-6 space-y-12 lg:grid lg:grid-cols-6 lg:gap-x-6 lg:space-y-0">
  <div class="group relative">
    <div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
      <img src={p22} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
    </div>
  </div>
</div>


<!--Collectibles-->
<Collections />
<!--Collectibles-->
  
  <!-- Packages for Hot Sauces-->
  
  <div class="bg-red-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <Button block color="secondary" class="text-2xl font-bold text-gray-900"><h1 class="text-center">Hot Sauce Madness</h1></Button>
  
        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div class="group relative">
            <div class="relative border border-block: solid;h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src={p22} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-6 text-sm text-gray-500">    
                <div>
                  <Button block color="secondary" >Pineapple Lemonstarburst</Button>
                </div>
          </div>
  
          <div class="group relative">
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src={p16} alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <div>
                <Button block color="secondary">Strawberry Inferno</Button>
                    
              </div> 
          </div>
  
          <div class="group relative">
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src={p12} alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
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
        <img src={p11} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
        </div>
        <h3 class="mt-6 text-sm text-gray-500">
          <div>
            <Button block color="secondary" >Spare Me</Button>
                
          </div> 
      </div>
  
      <div class="group relative">
        <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img src={p17} alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
        </div>
        <h3 class="mt-6 text-sm text-gray-500">
          <div>
            <Button block color="secondary" >Chocolate Bites</Button>
               
          </div>  
      </div>
  
      <div class="group relative">
        <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img src={p23} alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
        </div>
        <h3 class={"mt-6 text-sm text-gray-500"}>
          <div>
            <Button block color="secondary" >Pear Me</Button>
                
          </div>  
      </div>
      </div>
      </div>
    </div>
  </div>

  </div>


<style>
  .card:hover{
    box-shadow: 8px 8px 8px rgb(181, 92, 253);
    transform:scale(1.2);
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
