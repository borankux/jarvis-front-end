<template>
  <div class="task">
    <div class="check-box">
      <checkbox class="checkbox" :checked="isChecked" @onValueChanged="onCheckBoxChanged"></checkbox>
    </div>
    <div class="title" :class="{'title-done': task.status === 1}">
      {{task.title}}
    </div>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
    import CheckBox from './checkbox'
    export default {
        components: {
            'checkbox': CheckBox
        },
        name: "task",
        props: {
            task: {
                type:Object,
                default: {
                    title: "untitled",
                    status:0
                }
            }
        },
        data (){
            return {
                taskData: this.task
            }
        },
        computed:{
            isChecked(){
                return this.taskData.status === 1;
            }
        },
        methods: {
            onCheckBoxChanged(value)
            {
                this.taskData.status = value ? 1 : 0;
            }
        }
    }
</script>

<style scoped>
  .task {
    padding: 5px 0;
  }

  .checkbox {
    float: left;
    font-size: 20px;
  }

  .title {
    float: left;
    font-size: 0.8em;
    width: calc(100% - 20px);
    padding: 0 3px;
    box-sizing: border-box;
    white-space: normal;
    transition: color 0.3s;
  }

  .title-done {
    color: #929292;
    text-decoration: line-through;
  }
</style>
