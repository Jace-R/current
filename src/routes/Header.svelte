<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import home from '$lib/images/home.png';
	import contact from '$lib/images/contact.png';

	import Hamburger from './Hamburger.svelte';
	import Sidebar from './Sidebar.svelte';
	import {
    ButtonDropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle
  	} from 'sveltestrap';
	
	export let sidebar = false
</script>

<header>
  	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
	
	


	<nav>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z" />
		</svg>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/landing') ? 'page' : undefined}>
				<a href="/menu">Menu</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/cartwheel') ? 'page' : undefined}>
				<a href="/hotsauce">Seeds</a>
			</li>
			<li aria-current={$page.url.pathname.startsWith('/seeds') ? 'page' : undefined}>
				<a href="/seeds">Hot Sauce</a>
			</li>
		</ul>
		<svg viewBox="0 0 2 3" aria-hidden="true">
			<path d="M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z" />
		</svg>
	</nav>

	<div class="corner">
		<a href="./about">
			<img src={home} alt="SvelteKit" />
		</a>
	</div>

	<div class="corner">
		<a href="./contact">
			<img src={contact} alt="GitHub" />
		</a>
	</div>

	<div class="corner">
		<a href="https://github.com/sveltejs/kit">
			<img src={github} alt="GitHub" />
		</a>
	</div>

		
	<!-- Profile dropdown -->
	<ButtonDropdown>
		<DropdownToggle color="light" caret>Sign In</DropdownToggle>
		<DropdownMenu>
		  <DropdownItem header>Manage your Account</DropdownItem>
		  <DropdownItem>
			<a href="./account" >Profile</a></DropdownItem>
		  <DropdownItem>Settings</DropdownItem>
		  <DropdownItem divider />
		  <DropdownItem>
			<a href="./login" >Account</a></DropdownItem>
		  <DropdownItem>Sign Out</DropdownItem>
		</DropdownMenu>
	  </ButtonDropdown>
     
		  
</header>

<style>
	header {
		display: flex;
		justify-content: flex-end;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
