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
  background-color: white;
  padding : 5px;
  overflow: hidden;
}

.project-preview{
  background-position : center;
  display : block;
  height : 400px;
  width : 70%;
  margin : 5px;
  background-image: url('../assets/spn-ospe-01x01.png');
 // :style="{ 'background-image': 'url(' + project.img + ')' }"

}
</style>
