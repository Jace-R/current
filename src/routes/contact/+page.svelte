<script>
	import google from '$lib/images/google.svg';
	import github from '$lib/images/github.svg';
  import { Icon } from 'sveltestrap';
  import { InputGroup, InputGroupText, Input } from 'sveltestrap';
  </script>

<div class="jumbotron">
  <div class="container pt-lg-md">
    <div class="row justify-content-center">
      <div class="col-lg-5">
        <div class="card bg-secondary shadow border-0" style="background-image: url('..lib/images/seeds.gif'); background-repeat: no-repeat; background-size: cover; background-position: center center;">
          <div class="card-header bg-white">

            <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
              <div class="w-full max-w-md space-y-8">
                <div>
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Contact Us</h2>
                </div>
                <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true">
                <div class="-space-y-px rounded-md shadow-sm">
                  <div>
					<label for="email-address" class="sr-only"> Name</label>
					<input id="name" name="name" type="name" autocomplete="name" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Name">
				  </div>
                  <div>
					<label for="phoneNumber" class="sr-only">Phone Number</label>
					<input id="phoneNumber" name="phoneNumber" type="phoneNumber" autocomplete="phoneNumber" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Phone Number">
				  </div>
				  <div>
					<label for="email-address" class="sr-only"> Email address</label>
					<input id="email-address" name="email" type="email" autocomplete="email" required class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Email address">
					</div>
					<div>
					<label for="message" class="sr-only">Your Message</label>
					<input id="message" name="message" type="message" autocomplete="message" required class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Message">
					</div>
                </div>
              
              
                <div>
                  <button type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <!-- Heroicon name: mini/lock-closed -->
                    <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  Submit
                  </button>
                </div>
                <div class="flex items-center justify-between">
                  <div class="text-sm">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                    </div>
              
                  <div class="text-sm">
                  <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Create an Account</a>
                  </div>
                </div>
                </form>
              </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>


