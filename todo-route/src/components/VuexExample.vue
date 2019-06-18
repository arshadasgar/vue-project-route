<template>
  <div>
    <h2>Vuex Examples</h2>  
    <button @click="incrementCount">VUEX state : {{ counter }}</button>
    <label for>Double the count is: {{ doubleCounter }}</label>
  </div>
</template>
<script>
export default {
  name: "VuexExample",
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
  }
};
</script>