{#if show}
  <nav transition:fly={{x: 250, opacity: 1}}>
    <button on:click={() => {modal_show = true; show = false;}}>About</button>
    <a href="./contact" >Contact</a>
  </nav>
{/if}

<Modal bind:show={modal_show} />

<script>
import { fly } from 'svelte/transition';
import Modal from './Modal.svelte';

export let show = false;
let modal_show = false;
</script>
		
<style>
nav {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  padding: 2rem 1rem 0.6rem;
  border-left: 1px solid #aaa;
  background: #fff;
  overflow-y: auto;
	width: 10rem;
}
</style>