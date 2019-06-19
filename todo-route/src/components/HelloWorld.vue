<template>
  <div class="row">
    <div class="col-md-6">
      <div class="card">
        <h3>Home</h3>
        <p>
          <b>{{ counter }}</b> times you have clicked the button in the
          <a href="#/vuex">vuex example</a> page
          <br>So it's double click score would be
          <b>{{ dblClickCounter }}</b>
          <br>
        </p>
        <p>
          Name:
          <b>{{ fetchName }}</b>
        </p>
      </div>
    </div>
    <div class="col-md-6">
      <div class="card">
        <VuexExample/>
      </div>
    </div>
  </div>
</template>
<script>
import VuexExample from "./VuexExample";

export default {
  components: {
    VuexExample
  },
  computed: {
    counter: function() {
      return this.$store.state.counter;
    },
    dblClickCounter: function() {
      return this.$store.getters.doubleTheClicks;
    },
    fetchName: function() {
      return this.$store.state.examplename;
    }
  }
};
</script>
<style lang="">
b {
  font-size: 50px;
}
</style>