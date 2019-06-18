<template>
  <div>
    <h3>Home</h3>
    <p>
      <b>{{ counter }}</b> times you have clicked the button in the <a href="#/vuex">vuex example</a> page <br>
      So it's double click score would be <b>{{ dblClickCounter }}</b><br>
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    counter: function() {
      return this.$store.state.counter;
    },
    dblClickCounter: function() {
      return this.$store.getters.doubleTheClicks
    }
  }
};
</script>
<style lang="">
  b {
    font-size: 80px;
  }
</style>