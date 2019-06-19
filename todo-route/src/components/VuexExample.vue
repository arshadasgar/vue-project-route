<template>
  <div>
    <h2>Vuex Examples</h2>  
    <button class="btn btn-raised btn-danger" @click="incrementCount">VUEX state : {{ counter }}</button>
    <label for>Double the count is: {{ doubleCounter }}</label>
    <div>
        Mutate by passing a value: 
        <input type="text" v-model="exampleName">
    </div>
  </div>
</template>
<script>
export default {
  name: "VuexExample",
  data: function(){
      return {
          exampleName: this.$store.state.examplename
      }
  },
  methods: {
    incrementCount: function() {
      this.$store.commit("incrementCounter");
    }
  },
  computed: {
    counter: function() {
      return this.$store.state.counter;
    },
    doubleCounter: function() {
      return this.$store.getters.doubleTheClicks;
    }
  },
  watch: {
      exampleName: function(value) {
        this.$store.commit('changeName', value)
      }
  }
};
</script>