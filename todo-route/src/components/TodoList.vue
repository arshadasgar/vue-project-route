<template>
  <div class="col-md-4">
    <div class="card">
      <h4>To do</h4>
      <div class="row custom_list" v-for="(task, index) in pendingtasks" :key="task.id">
        <div class="col-md-9">
          <span class="title">{{ task.title }}</span>
        </div>
        <div class="col-md-3">
          <button class="btn btn-primary btn-raised" @click="$emit('markascomplete', task, index)">✓</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  props: ["pendingtasks"]
};
</script>
<style>
</style>