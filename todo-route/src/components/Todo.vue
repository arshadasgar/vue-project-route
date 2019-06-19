<template>
  <div class="row">
    <div class="col-md-12">
      <h3>Manage tasks</h3>
    </div>
    <div class="col-md-4">
      <TodoAdd @addtask="addTask"/>
    </div>
    <div class="col-md-4">
      <TodoList :pendingtasks="pendingTasks" @markascomplete="markAsComplete"/>
    </div>
    <div class="col-md-4">
      <TodoCompletedList :completedtasks="completedTasks" @markaspending="markAsPending"/>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import TodoList from "./TodoList";
import TodoCompletedList from "./TodoCompletedList";
import TodoAdd from "./TodoAdd";

export default {
  name: "Todo",
  components: {
    TodoList,
    TodoCompletedList,
    TodoAdd
  },
  data: function() {
    return {
      newId: 101
    };
  },
  methods: {
    markAsComplete: function(task, index) {
      this.$store.commit("addTaskToCompletedTasks", task);
      this.$store.commit("removeTaskFromPendingTasks", index);
    },
    markAsPending: function(task, index) {
      this.$store.commit("addTaskToPendingTasks", task);
      this.$store.commit("removeTaskFromCompletedTasks", index);
    },
    addTask: function(task) {
      let taskObj = {
        id: this.newId,
        title: task
      };
      this.$store.commit("addTaskToPendingTasks", taskObj);
      this.newId++;
    }
  },
  computed: {
    pendingTasks: function() {
      return this.$store.state.pendingTasks;
    },
    completedTasks: function() {
      return this.$store.state.completedTasks;
    }
  }
};
</script>