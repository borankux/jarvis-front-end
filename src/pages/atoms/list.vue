<template>
    <div class="list">
      <div class="title">
        <div class="title-progress" style="width: 100%;">
          <progress-bar :progress="20"></progress-bar>
        </div>

        <div class="title-info">
          {{data.title}}
        </div>
      </div>

      <div class="task-list">
        <ul style="list-style: none;padding: 0;margin: 0;">
          <task v-for="task in data.tasks" v-bind:key="task.id" :task="task"></task>
        </ul>
      </div>
    </div>
</template>

<script>
    import ProgressBar from './progress-bar';
    import Task from './task';

    export default {
        components: {
            'progress-bar': ProgressBar,
            'task': Task
        },
        name: "list",
        props: {
            data: {
                type: Object,
                default:{
                    id: -1,
                    title:'Untitled List',
                    tasks:[]
                }
            }
        }
    }
</script>

<style scoped>
  .list {
    text-align: left;
    width: 300px;
    height: auto;
    background-color: white;
    box-shadow: 0 0  6px 2px #aaa;
    border-radius: 5px;
    box-sizing: border-box;
    padding-top: 5px;
    padding-bottom: 20px;
  }

  .title {
    margin-bottom: 10px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    box-sizing: border-box;
  }
  .title .title-info{
    width: 100%;
    font-size: 0.9em;
    text-align: center;
    line-height: 25px;
    font-weight: bolder;
  }
</style>
