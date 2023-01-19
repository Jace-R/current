<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	
	import { Router, Route, Link } from "svelte-navigator";
	import { Col, Container, Row } from 'sveltestrap';
	import Blog from './Blog.svelte';
	import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardSubtitle,
    CardText,
    CardTitle
  } from 'sveltestrap';

</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
</svelte:head>

<section>
	


</section>

	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
	  <h1></h1>
<section>
	<div class="col">
		<div class="cards">
			<div>
				<h1 class="text-center">Mango Madness</h1>
			</div>
			<div>
				<p class="text-center">This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border.</p>
			</div>
			<p class="text-center">5 mL.</p>
			<p class="text-center">© 2022 Licensed</p>
		</div>
		<div class="cards">
			<div>
				<h1 class="text-center">Berry Peach Lava</h1>
			</div>
			<div>
				<p class="text-center">This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border.</p>
			</div>
			<p class="text-center">5 mL.</p>
			<p class="text-center">© 2022 Licensed</p>
		</div><div class="cards">
			<div>
				<h1 class="text-center">Pineapple Starburst</h1>
			</div>
			<div>
				<p class="text-center">This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border.</p>
			</div>
			<p class="text-center">5 mL.</p>
			<p class="text-center">© 2022 Licensed</p>
		</div>
	</div>
</section>
<section >

	<style>
	.cards {
		background-color: lightgrey;
		width: 400px;
		border: 10px solid green;
		padding: 5px;
		margin: 0px;
		display: inline-block;
    	position: relative;
		}
	
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
