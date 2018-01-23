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
          //return require('../assets/spn-ospe-01x01.png');
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
    padding : 2.5px;
    overflow : hidden;
    position : relative;

  }



  .preview-image{
    //background-image : url("../assets/spn-ospe-01x01.png");
    background-position : center;
    background-size : 100%;
    width:100%;
    height: 100%;
    transform: scale(1,1);
    transition : background-size 0.5s;
  }

  #project-preview:hover .preview-image {
    background-size: 110%;
  }

  img {
    width: 100%;
    vertical-align: middle;
  }

  .preview-title {
    position : absolute;
    top : 0%;
    left : 0%;
    width: 100%;
    height : 100%;
    transform : scale(0.8,0.8);
    opacity : 0;
    transition : transform 1s, opacity 1s;


  }

  .preview-title h3 {
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
  }

  #project-preview:hover .preview-title {
    opacity : 1;
    transform : scale(1,1);
  }



  h3{
    color : white;
    font-family: 'khula', sans-serif;
    font-size : 35px;
    font-weight: 500;
    text-shadow: 0px 0px 3px #ffffff;
  }

</style>
