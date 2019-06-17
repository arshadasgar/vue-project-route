<template>
  <div class="row">
    <div class="col-md-12">
      <h3>Manage tasks</h3>
    </div>
    <TodoList :pendingtasks="pendingTasks" @markascomplete="markAsComplete"/>
    <TodoCompletedList :completedtasks="completedTasks" @markaspending="markAsPending"/>
  </div>
</template>
<script>
import axios from "axios";
import TodoList from "./TodoList";
import TodoCompletedList from "./TodoCompletedList";
export default {
  name: "Todo",
  components: {
    TodoList,
    TodoCompletedList
  },
  data: function() {
    return {
      pendingTasks: [],
      completedTasks: []
    };
  },
  created: function() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks: function() {
      axios.get("http://api.test").then((resp) => {
        this.pendingTasks = resp.data.pending;
      });
    },
    markAsComplete: function(task, index) {
      this.completedTasks.push(task);
      this.pendingTasks.splice(index, 1);
    },
    markAsPending: function(task, index) {
      this.pendingTasks.push(task);
      this.completedTasks.splice(index, 1);
    }
  }
};
</script>