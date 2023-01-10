<svelte:head>
	<title>Peppers</title>
	<meta name="description" content="About this app" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
</svelte:head>


<div class="bg-gray-100">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl font-bold text-gray-900">Collections</h2>
  
        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div class="group relative">
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <a href="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg">
                <span class="absolute inset-0"></span>
                Desk and Office
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
          </div>
  
          <div class="group relative">
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <a href="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg">
                <span class="absolute inset-0"></span>
                Self-Improvement
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
          </div>
  
          <div class="group relative">
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <a href="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg">
                <span class="absolute inset-0"></span>
                Travel
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">Daily commute essentials</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  
  <!-- Carousel -->
  <script lang="ts">
    import {
      Carousel,
      CarouselControl,
      CarouselIndicators,
      CarouselItem
    } from 'sveltestrap';
  
    const items = [
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
      'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E'
    ];
    let activeIndex = 0;
  </script>
  
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
<!-- Carousel -->