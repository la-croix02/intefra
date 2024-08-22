<template>
    <div class="loader__wrapper">
        <div class="loader"></div>
        <div class="loader"></div>
        <div class="loader"></div>
        <div class="loader"></div>
        <div class="loader"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.loader__wrapper {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}
.loader {
  aspect-ratio: 1;
  position: absolute;
  border-radius: 50%;
  border: 5px solid #3c6e71;
  border-bottom: 5px solid transparent;
  animation: load 4s ease-in-out infinite;
}
.loader:nth-child(1) {
  animation-direction: forwards;
  width: 250px;
}
.loader:nth-child(2) {
  animation-direction: reverse;
  width: 200px;
}
.loader:nth-child(3) {
  animation-direction: forwards;
  width: 150px;
}
.loader:nth-child(4) {
  animation-direction: reverse;
  width: 100px;
}
.loader:nth-child(5) {
  animation-direction: forwards;
  width: 50px;
}

@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
}
.loader {
  aspect-ratio: 1;
  position: absolute;
  border-radius: 50%;
  border: 5px solid #3c6e71;
  border-bottom: 5px solid transparent;
  animation: load 4s ease-in-out infinite;
}
.loader:nth-child(1) {
  animation-direction: forwards;
  width: 250px;
}
.loader:nth-child(2) {
  animation-direction: reverse;
  width: 200px;
}
.loader:nth-child(3) {
  animation-direction: forwards;
  width: 150px;
}
.loader:nth-child(4) {
  animation-direction: reverse;
  width: 100px;
}
.loader:nth-child(5) {
  animation-direction: forwards;
  width: 50px;
}

@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(720deg);
  }
}

</style>