<template>
    <div class="card">
      <div class="col-md-12">
        <h4>Completed tasks</h4>
      </div>
      <div class="row custom_list" v-for="(task, index) in completedtasks" :key="task.id">
        <div class="col-md-9">
          <span class="title">{{ task.title }}</span>
        </div>
        <div class="col-md-3">
          <button class="btn btn-danger btn-raised" @click="$emit('markaspending', task, index)">✓</button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: "TodoCompletedList",
  props: ["completedtasks"]
};
</script>
<style>
</style>