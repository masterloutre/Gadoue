<template>
    <div id="page" class="full-height line-100">
      <intro></intro>
      <projects-overview></projects-overview>
      <mentions></mentions>
    </div>
</template>

<script>
  import Intro from './Intro'
  import ProjectsOverview from "./ProjectsOverview";
  import Mentions from "./Mentions";

    export default {
        name: "home-page",
        components: {
          Mentions,
          ProjectsOverview,
          Intro}
    }
</script>

<style scoped>
#page{
  overflow: scroll;
  background-image: linear-gradient(coral,cadetblue);
}

  intro {
    //position : absolute;
    z-index : -1;
  }
</style>
