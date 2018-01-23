<template>
    <div id="menu" class = "line-100 wrapper">
      <ul class = "menu">
        <li v-for = "page in pages">
          <a v-if="lang.french"><h2>{{page.french}}</h2></a>
          <a v-if="lang.english"><h2>{{page.english}}</h2></a>
        </li>
        <li id= "changeLanguage" @click = "changeLanguage"><h2>Change Language</h2></li>
      </ul>
      <div class="neon"></div>
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
  #menu {
    position: absolute;
    z-index: 10;
  }

  .menu{
    position: relative;
    display : inline-block;

    color : white;
    font-family: 'Anton', sans-serif;
    width : 100%;
    //border-bottom: solid white 2px;
    margin : 0;
    padding: 0;
    margin-bottom: -6px;
    //box-shadow: 0px 0px 3px #ffffff;
  }

  .menu li {
    display: block;
    list-style-type: none;
    width : 10%;
    //padding-bottom: 3px;
    //padding-top: 3px;
    float : left;
    margin : 0;
  }

  #changeLanguage {
    width : 20%;
    float : right;
  }

  .neon{
    display : block;
    //position : relative;
    height : 2px;
    background-color: white;
    box-shadow: 0px 0px 3px #ffffff;
  }



</style>
