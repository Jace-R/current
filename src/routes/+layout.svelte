<script>
	import Header from './Header.svelte';
	import './styles.css';
	import "../app.css";
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	
	
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<hr>

	<!-- Footer -->
	<footer>
		<!-- Footer Links -->
		<div class="container text-center text-md-left">

			<!-- Footer links -->
			<div class="row text-center text-md-left mt-3 pb-3">
		
			  <!-- Grid column -->
			  <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
				<h6 class="text-uppercase mb-4 font-weight-bold">MyCreations</h6>
				<p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing
				  elit.
				</p>
			  </div>
			  <!-- Grid column -->
		
			  <hr class="w-100 clearfix d-md-none">
		
			  <!-- Grid column -->
			  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
				<h6 class="text-uppercase mb-4 font-weight-bold">Activities</h6>
				<p>
				  <a href="#!">Quizzes</a>
				</p>
				<p>
				  <a href="#!">Exams</a>
				</p>
				<p>
				  <a href="#!">Notes</a>
				</p>
				<p>
				  <a href="#!">Powerpoints</a>
				</p>
				<p>
				  <a href="#!">Solution Manuals</a>
				</p>
				<p>
				  <a href="#!">Animations</a>
				</p>
			  </div>
			  <!-- Grid column -->
		
			  <hr class="w-100 clearfix d-md-none">
		
			  <!-- Grid column -->
			  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
				<h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
				<p>
				  <a href="#!">Your Account</a>
				</p>
				<p>
				  <a href="#!">Become an Affiliate</a>
				</p>
				<p>
				  <a href="#!">Shipping Rates</a>
				</p>
				<p>
				  <a href="#!">Help</a>
				</p>
			  </div>
		
			  <!-- Grid column -->
			  <hr class="w-100 clearfix d-md-none">
		
			  <!-- Grid column -->
			  <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
				<h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
				<p>
				  <i class="ni ni-shop"></i> Ottawa, Ontario, Canada
				</p>
				<p>
				  <i class="ni ni-email-83"></i> informaxn@gmail.com
				</p>
				<p>
				  <i class="ni ni-mobile-button"></i> + 01 234 567 89
				</p>
				<p>
				  <i class="ni ni-send"></i> + 01 234 567 89
				</p>
			  </div>
			  <!-- Grid column -->
		
			</div>
			<!-- Footer links -->
		
			<hr>
	<!-- Grid row -->
    <div class="row d-flex align-items-center">
      <div class="col-lg-12">
          <h3 class="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
          <h4 class="mb-0 font-weight-light">Let's get in touch on any of these platforms.</h4>
      </div>

        <div class="col-lg-12 text-lg-center btn-wrapper">
          <a href="https://twitter.com/creativetim" class="btn btn-neutral btn-icon-only btn-twitter btn-round btn-lg">
            <img src={logo} alt="SvelteKit" />
          </a>
          <a href="https://www.facebook.com/creativetim" class="btn btn-neutral btn-icon-only btn-facebook btn-round btn-lg">
            <img src={logo} alt="SvelteKit" />
          </a>
          <a href="https://dribbble.com/creativetim" class="btn btn-neutral btn-icon-only btn-dribbble btn-lg btn-round">
            <img src={logo} alt="SvelteKit" />
          </a>
          <a href="https://github.com/creativetimofficial" class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg">
            <img src={logo} alt="SvelteKit" />
          </a>
		  <a href="https://github.com/creativetimofficial" class="btn btn-neutral btn-icon-only btn-github btn-round btn-lg">
            <img src={logo} alt="SvelteKit" />
          </a>
        </div>

    </div>
    <!-- Grid row -->
    <!-- Footer Links -->
	<!-- Copyright -->
	<div class="footer-copyright text-center py-3 ">© 2022 Copyright:
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
		max-width: 120rem;
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
</style>
