<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <h3>{{task.title}}</h3>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "TodoItemView",
  data: function() {
    return {
      task: {}
    };
  },
  created: function() {
    this.fetchTask(this.$route.params.id);
  },
  methods: {
    fetchTask: function(taskId) {
      let task_id = parseInt(taskId);
      axios.get("http://api.test").then(resp => {
        this.task = _.find(resp.data.pending, { id: task_id });
      });
    }
  }
};
</script>