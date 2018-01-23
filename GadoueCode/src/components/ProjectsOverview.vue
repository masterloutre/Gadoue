<template>
    <div id="projects" class="wrapper">
      <project-preview v-for="project in projects" :project="project"></project-preview>

    </div>
</template>

<script>
  import {_projects} from '../data.js'
  import _language from '../Language.js'
  import ProjectPreview from "./ProjectPreview";

    export default {
      components: {ProjectPreview},
      name: "projects-overview",
        data () {
          //console.log(_projects[3].preview);
          return {
            projects : _projects,
            language : _language.state,
            img : "spn-ospe-01x01.png"
          }
        },
      methodes : {
        imgUrl ( imgName ) {
          //return require('~assets/' + name);
        }
      },
      computed : {
        imagePath () {
          return require('../assets/' + this.img);
        }
      }
    }
</script>

<style scoped>

#projects {
  //height: auto;
  //background-color: white;
  margin: 5px;
  padding : 2.5px;
  overflow: hidden;
  border: solid 2px white;
  box-shadow: 0 0 3px white;
}

  #projects:first-child {
    width : 100%;
  }


</style>
