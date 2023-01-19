<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Seed from './seed.svelte';
  import { fly } from 'svelte/transition';
	let visible = false;
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	Hot Sauce Gallery
</label>

{#if visible}
	<div transition:fly="{{ y: 200, duration: 2000 }}">
		<Router>
        <Link to="seeds"> Collectibles </Link>
        <Route path="seeds/*seedsRoute" component={Seed} />
    </Router>
  </div>
{/if}