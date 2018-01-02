<template>
    <div class = "wrapper line-100">
      <ul class = "menu">
      <li v-for = "page in pages"><a>{{page}}</a></li>
      </ul>

    </div>

</template>

<script>
    import Lang

    export default {
      name: "main-menu",
      data () {
        return {
         pages: ["Home", "Main", "Projects", "About"]
        }
      }

    }
</script>

<style scoped>
  .menu{
    color : white;
    font-family: 'Anton', sans-serif;
    width : 100%;
    border-bottom: solid white 4px;
    margin : 0;
    padding: 0;
  }

  .menu li {
    display: inline;
    list-style-type: none;
    width : 10%;
    padding-bottom: 4px;
    padding-top: 4px;
    float : left;
    margin : 0;
  }



</style>
