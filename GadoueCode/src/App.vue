<template>
  <div id="app" class = "wrapper">
    <header>
      <main-menu></main-menu>
    </header>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import MainMenu from '@/components/MainMenu'
  import HelloWorld from "./components/HelloWorld";
export default {
  components: {HelloWorld, MainMenu},
  name: 'app',
}
</script>

<style>
#app {
  font-family: 'Abel', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #1a2024;
}

* {
  box-sizing: border-box;
  overflow: hidden;
}

  .line-100 {
    width : 100%
  }

  .wrapper {
    padding : 0;
    margin : 0;
  }

</style>
