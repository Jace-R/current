<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Seed from './seed.svelte';
  import { fly } from 'svelte/transition';
	let visible = false;
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	Seeds Gallery
</label>

{#if visible}
	<div transition:fly="{{ y: 200, duration: 2000 }}">
		<Router>
        <Link to="seeds"> Seeds </Link>
        <Route path="seeds/*seedsRoute" component={Seed} />
    </Router>
  </div>
{/if}