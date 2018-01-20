<template>
    <div class = "wrapper line-100">
      <ul class = "menu">
      <li v-for = "page in pages">
        <a v-if="lang.french">{{page.french}}</a>
        <a v-if="lang.english">{{page.english}}</a>
      </li>
        <li id= "changeLanguage" @click = "changeLanguage">Change Language</li>
      </ul>


    </div>

</template>


<script>

  var _pages = [
    { french : 'Accueil', english : 'Home'  },
    { french : 'À Propos', english : 'About' }
      ]

    import language from '../Language.js'

    export default {
      name: "main-menu",
      data () {
        return{
          pages : _pages,
          lang : language.state
        }
      },
      methods : {
        changeLanguage(){
          language.changeLanguage();
          console.log("button clicked");
        },

      },

    }
</script>

<style scoped>
  .menu{
    position: absolute;
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

  #changeLanguage {
    width : 20%;
    float : right;
  }



</style>
