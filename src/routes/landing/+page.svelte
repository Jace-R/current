<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Layer from './layer.svelte';
  import { fly } from 'svelte/transition';
	let visible = false;
</script>

<label>
	<input type="checkbox" bind:checked={visible}>
	Collections
</label>

{#if visible}
	<div transition:fly="{{ y: 200, duration: 2000 }}">
		<Router>
        <Link to="layer"> Flaming Peppers  </Link>
        <Route path="layer/*layerRoute" component={Layer} />
    </Router>
  </div>
{/if}