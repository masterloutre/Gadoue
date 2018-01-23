<template>
    <div id="intro" class="wrapper line-100">
      <div id="description">
        <h1>Lou Landry--Linet</h1>
        <div class="basic-text-card">
          <div v-if = "language.french"><p>{{texte.french}}</p></div>
          <div v-else ><p>{{texte.english}}</p></div>
        </div>
      </div>
    </div>
</template>

<script>
  import _language from '../Language.js'
  import {_descriptionText} from '../data.js'

    export default {
        name : "intro",
        data () {
          return {
            texte : _descriptionText,
            language : _language.state
          }
        }
    }
</script>

<style scoped>
  #intro{
    position : relative;
  }

#description {

  position : fixed;
  top : 30%;
  right : 2%;
  width : 48%;
  //float : right;
  margin-right : 5%;
  //vertical-align: middle;

}

  .wrapper{
    min-height:100%;
  }

</style>
