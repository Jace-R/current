<script lang="ts">

  
  import p22 from '$lib/images/peppers/22.jpg'
  import p43 from '$lib/images/hots/mildcut/1.jpg'
  import p44 from '$lib/images/hots/mildcut/2.jpg'
  import p45 from '$lib/images/hots/mildcut/3.jpg'
  import p46 from '$lib/images/hots/mildcut/4.jpg'
  import p47 from '$lib/images/hots/mildcut/5.jpg'
  import p48 from '$lib/images/hots/mildcut/6.jpg'
  import p49 from '$lib/images/hots/mildcut/7.jpg'

  
  
</script>

<div class="pic-ctn">
  <img src={p22} alt="" class="pic">
  <img src={p43} alt="" class="pic">
  <img src={p44} alt="" class="pic">
  <img src={p45} alt="" class="pic">
  <img src={p46} alt="" class="pic">
  <img src={p47} alt="" class="pic">
  <img src={p48} alt="" class="pic">
  <img src={p49} alt="" class="pic">
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
  40% {
    transform: translateX(-200px);
    opacity: 0;
  }
  50% {
    transform: translateX(-200px);
    opacity: 0;
  }
  60% {
    transform: translateX(-200px);
    opacity: 0;
  }
  70% {
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
  position: fixed;
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
img:nth-child(6) {
  animation-delay: 10s;
}
img:nth-child(7) {
  animation-delay: 12s;
}
img:nth-child(8) {
  animation-delay: 14s;
}
img:nth-child(9) {
  animation-delay: 16s;
}
  
</style>