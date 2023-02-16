<script>
	import Header from './Header.svelte';
	import './styles.css';
	import "../app.css";

	import github from '$lib/images/github.svg';
	import Sidebar from './Sidebar.svelte';

	let sidebar_show = false;
</script>



<div class="app">
	<Header />

	<Sidebar bind:show={sidebar_show} />

	<main>
		<slot />
	</main>

	<hr>

	<!-- Footer -->
	<footer>
		<!-- Footer Links -->
		<div class="container text-justify text-md-left bg-orange-200">

			<div class="col-lg-12 text-lg-center btn-wrapper ">
				<a href="https://twitter.com/creativetim" class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg" >
				  <i class="fa fa-twitter"></i>
				</a>
				<a href="https://www.facebook.com/creativetim" class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg" >
				  <i class="fa fa-facebook-square"></i>
				</a>
				<a href="https://dribbble.com/creativetim" class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round" >
				  <i class="fa fa-dribbble"></i>
				</a>
				<a href="https://github.com/creativetimofficial" class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg" >
				  <i class="fa fa-github"></i>
				</a>
			  </div>

    <!-- Footer Links -->
	<!-- Copyright -->
	<div class="footer-copyright text-center py-1 ">© 2022 Copyright:
	   <a href="http://www.infernalpeeper.com/"> infernalpepper.com</a>
	</div>
	<!-- Copyright -->
   
	</footer>
    <!-- Footer -->	
</div>


<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 100rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		
		
	}

	footer img {
		font-weight: bold;
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}

	:global(body){
        background-color: rgb(181, 139, 206);
        background-image: url("$lib/images/peppers/18.jpg");
    }

</style>
