<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	
	import { Router, Route, Link } from "svelte-navigator";
	import { Col, Container, Row } from 'sveltestrap';
	import Blog from './Blog.svelte';

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>

	<h1></h1>
	<h1></h1>
	<h1></h1>
	<h1></h1>
	<h1></h1>
	<h1></h1>

</section>

	  

<section >
	<Router>
		<header class="text-center">
		  <h2>Infernalpeppers</h2>
	  
		  <nav >
			<Link to="/" class="text-white">Seeds</Link>
			<Link to="pepper" class="text-white">Pepper's Feature</Link>
			<Link to="blog" class="text-white">Hot Sauce</Link>
		  </nav>
		</header>
	  
		<main>
		  <Route path="blog/*blogRoute" component={Blog} />
	  
		  <Route path="/">
			<Container>
				<Row>
					<Col sm="12" md={{ size: 6, offset: 3 }} class="text-center" >
						lemonstarburst, jay's peach scorpion, trinidad scorpion, scotch bonnet
					</Col>
				</Row>
				<Row>
					<Col sm="12" md={{ size: 6, offset: 3 }} class="text-center">
					      5 mL
					</Col>
				</Row>
			</Container>
		  </Route>
	  
		  <Route path="pepper">
			<Container>
				<Row>
					<Col sm="12" md={{ size: 6, offset: 3 }} class="text-center">
					     ordinary, mild, hot, super hot, extremely hot
					</Col>
				</Row>
				<Row>
					<Col sm="12" md={{ size: 6, offset: 3 }} class="text-center">
					      5 mL
					</Col>
				</Row>
			</Container>
		  </Route>
		</main>
	</Router>

		<section>
			<h1></h1>
			<h1></h1>
			<h1></h1>
			<h1></h1>
			<h1></h1>
			<h1></h1>
			<h1></h1>
			<h1></h1>
			<h1></h1>
		</section> 

	  <style>
		  :global(:target) {
	  
		  background-color: papayawhip;}
	  </style>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}

</style>
