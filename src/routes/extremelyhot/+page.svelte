<script lang="ts">

  
	import p11 from '$lib/images/peppers/11.jpg'
  import p16 from '$lib/images/peppers/16.jpg'
	import p44 from '$lib/images/peppers/44.jpg'
	import p43 from '$lib/images/hots/extreme/1.jpg'
	import p45 from '$lib/images/hots/extreme/2.jpg'
	
	
  
	
	
  </script>
  
  <div class="pic-ctn">
	<img src={p16} alt="" class="pic">
	<img src={p43} alt="" class="pic">
	<img src={p44} alt="" class="pic">
	<img src={p45} alt="" class="pic">
	<img src={p11} alt="" class="pic">
  </div>
  
  
  <style>
	html, body {
	margin: 0;
	padding: 0;
  }
  
  .pic-ctn {
	width: 50vw;
	height: 100px;
  }
  
  @keyframes display {
	0% {
	  transform: translateX(200px);
	  opacity: 0;
	}
	10% {
	  transform: translateX(0);
	  opacity: 1;
	}
	20% {
	  transform: translateX(0);
	  opacity: 1;
	}
	30% {
	  transform: translateX(-200px);
	  opacity: 0;
	}
	100% {
	  transform: translateX(-200px);
	  opacity: 0;
	}
  }
  
  .pic-ctn {
	position: relative;
	width: 100vw;
	height: 300px;
	margin-top: 15vh;
  }
  
  .pic-ctn > img {
	position:fixed;
	top: 0;
	left: calc(5% - 50px);
	opacity: 0;
	animation: display 10s infinite;
  }
  
  img:nth-child(2) {
	animation-delay: 2s;
  }
  img:nth-child(3) {
	animation-delay: 4s;
  }
  img:nth-child(4) {
	animation-delay: 6s;
  }
  img:nth-child(5) {
	animation-delay: 8s;
  }
	
  </style>