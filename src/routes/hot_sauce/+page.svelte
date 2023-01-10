
<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Blog from './Blog.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</svelte:head>

<div class="bg-white">
    <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>
  
      <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="#" class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." class="h-full w-full object-cover object-center group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Earthen Bottle</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$48</p>
        </a>
  
        <a href="#" class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg" alt="Olive drab green insulated bottle with flared screw lid and flat top." class="h-full w-full object-cover object-center group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Nomad Tumbler</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
  
        <a href="#" class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg" alt="Person using a pen to cross a task off a productivity paper card." class="h-full w-full object-cover object-center group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Focus Paper Refill</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$89</p>
        </a>
  
        <a href="#" class="group">
          <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg" alt="Hand holding black machined steel mechanical pencil with brass tip and top." class="h-full w-full object-cover object-center group-hover:opacity-75">
          </div>
          <h3 class="mt-4 text-sm text-gray-700">Machined Mechanical Pencil</h3>
          <p class="mt-1 text-lg font-medium text-gray-900">$35</p>
        </a>
  
        <!-- More products... -->
      </div>
    </div>
  </div>

  <!--Grid row-->
  <div class="row text-center" >
  
    <!--Grid column-->
    <div class="col-lg-3 col-md-12 mb-3">
    
      <!--Featured image-->
      <div class="view overlay rounded z-depth-1 waves-light" >
        <img src="./assets/img/courseIcons/iconsSub/bioChem/biotechN.png" class="img-fluid" alt="Sample project image">
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
        <a href="./assets/notes/biochem/cells.pdf" class="btn btn-success stretched-link text-white" target="_blank" download="cells.pdf">Download</a>
        </div>
    
    </div>
    <!--Grid column-->
    
    <!--Grid column-->
    <div class="col-lg-3 col-md-6 mb-3">
    
      <!--Featured image-->
      <div class="view overlay rounded z-depth-1  waves-light" >
        <img src="./assets/img/courseIcons/iconsSub/bioChem/enzy.png" class="img-fluid" alt="Sample project image">
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
        <a href="./assets/notes/biochem/enzymes.pdf" class="btn btn-success stretched-link text-white" target="_blank" download="enzymes.pdf">Download</a>
        </div>
    
    </div>
    <!--Grid column-->
    
    <!--Grid column-->
    <div class="col-lg-3 col-md-6 mb-3">
    
      <!--Featured image-->
      <div class="view overlay rounded z-depth-1  waves-light" >
        <img src="./assets/img/courseIcons/iconsSub/bioChem/enzyme.png" class="img-fluid" alt="Sample project image">
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
        <a href="./assets/notes/biochem/enzymeKinetix.pdf" class="btn btn-success stretched-link text-white" target="_blank" download="enzymeKinetix.pdf">Download</a>
        </div>
    
    </div>
    <!--Grid column-->
    <!--Grid column-->
    <div class="col-lg-3 col-md-12 mb-3">
      
      <!--Featured image-->
      <div class="view overlay rounded z-depth-1 waves-light" >
        <img src="./assets/img/courseIcons/iconsSub/bioChem/biotech.png" class="img-fluid" alt="Sample project image">
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
        <a href="./assets/notes/biochem/inhibition.pdf" class="btn btn-success stretched-link text-white" target="_blank" download="inhibition.pdf">Download</a>
        </div>
    
    </div>
    <!--Grid column-->
    
    </div>
    <!--Grid row-->

    <section>
      <Router>
        <header>
          <h1>My site</h1>
        
          <nav>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="blog">Blog</Link>
         
          </nav>
        </header>
        
        <main>
          <Route path="blog/*blogRoute" component={Blog} />
         
        
          <Route path="/">
          <h3>Home</h3>
          <p>Home sweet home...</p>
              <p>
                Check out the <Link to="/about#digital">digital heading</Link>, a heading with an <code>id </code> of “digital”
              </p>
          </Route>
        
          <Route path="about">
          <h3>About</h3>
              <p>
                This page has a header with an  <code>id</code> of “digital” that we're trying to link to.
              </p>
                    <p>
                Check out the <Link to="/about#digital">digital heading</Link>
              </p>
        
          <p>That's what it's all about!</p>
              <p>
                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
              </p>
              <p>
        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
              <p>
                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
              </p>
              <p>
        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
              <p>
                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
              </p>
              <p>
        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
              <p>
                Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.
              </p>
              <p>
        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
        <h4 id="digital">
          Digital 
              </h4>
        <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.
              </p>
          </Route>
        
          <Route>
          <h3>Default</h3>
          <p>No Route could be matched.</p>
          </Route>
        </main>
        </Router>
        
        <style>
          :global(:target) {
        
          background-color: papayawhip;}
        </style>
    </section>