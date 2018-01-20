<template>
    <div class="wrapper line-100 ">
      <div id="description" class="basic-text-card">
        <div v-if = "language.french"><p>{{texte.french}}</p></div>
        <div v-else ><p>{{texte.english}}</p></div>
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
#description {
  width : 48%;
  float : right;
  margin-right : 2%;
}

  .wrapper{
    background-color: aquamarine;
    min-height:100%;
  }

</style>
