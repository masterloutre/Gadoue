<template>
  <div id="project-preview" class="wrapper line-100"  >
    <div class = "preview-image" :style="{backgroundImage : 'url('+imagePath+')'}"></div>
    <div class ="preview-title"> <h3>{{project.title}}</h3> </div>

  </div>
</template>

<script>
    export default {
        name: "project-preview",
        props : ['project'],
      computed : {
        imagePath () {
          return require('../assets/' + this.project.preview);
        }
      }

    }

</script>

<style scoped>

  #project-preview{
    display : inline-block;
    margin-bottom: -6px;
    height : 400px;
    width : 50%;
    overflow : hidden;
    position : relative;

  }

  .preview-image{
    background-position : center;
    width:100%;
    height: 100%;
    transition : width 0.5s, height 0.5s;
  }

  .preview-image:hover {
    width: 110%;
    height : 110%;
  }

  img {
    width: 100%;
    vertical-align: middle;
  }

  .preview-title {
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%) scale(0.8,0.8);
    display: none;
    transition : transform 1s;

  }

  .preview-title:hover {
    display : block;
    transform : translate(-50%, -50%) scale(1,1);
  }



  h3{
    color : white;
    font-family: 'khula', sans-serif;
    font-size : 35px;
    font-weight: 500;
    text-shadow: 0px 0px 3px #ffffff;
  }

</style>
