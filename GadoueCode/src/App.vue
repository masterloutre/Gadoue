<template>
  <div id="app" class = "wrapper full-height">
    <header>
      <main-menu>
      </main-menu>
    </header>
    <router-view/>
  </div>
</template>

<script>
  import MainMenu from '@/components/MainMenu'
  import HelloWorld from "./components/HelloWorld"
  import Intro from './components/Intro'
export default {
  components: {HelloWorld, MainMenu, Intro},
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
}

html {
  height : 100%;
}

body {
  height : 100%;
}

#app {
}
  .line-100 {
    width : 100%
  }

  .wrapper {
    padding : 0;
    margin : 0;
  }

  p {
    margin : 0;
    font-family: 'Inconsolata';
    text-align : left;
    color : #011515;
    padding : 0;
  }

  .basic-text-card {
    background-color: white;
    padding : 10px;
  }

  .full-height {
    height : 100%;
  }

  h1 {
    color : white;
    font-family: 'khula', sans-serif;
    font-weight: 800;
    text-shadow: 0px 0px 4px #ffffff;
  }

h2 {
  color : white;
  font-family: 'khula', sans-serif;
  font-size : 18px;
  font-weight: 300;
  text-shadow: 0px 0px 1px #ffffff;
}

</style>
