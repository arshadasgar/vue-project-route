<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <h3>{{ getTask.title }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "TodoItemView",
  computed: {
    getTask: function() {
      let task_id = parseInt(this.$route.params.id)
      return _.find(this.$store.state.pendingTasks.pending, { id: task_id })
    }
  }
};
</script>