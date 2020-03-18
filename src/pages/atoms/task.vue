<template>
  <div class="task">
    <div class="check-box">
      <div class="task-mask" :class="{'task-mask-animate': buffer}"></div>
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
            },
            index: {
                type: Number,
                default:0
            }
        },
        data (){
            return {
                taskData: this.task,
                taskIndex: this.index,
                buffer: false,
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
                let that = this;
                that.buffer = !!value;
                setTimeout(function(){
                    that.buffer = false;
                    that.taskData.status = value ? 1 : 0;
                    that.$emit('updated', this.taskData, this.taskIndex);
                }, 2000);
            }
        }
    }
</script>

<style scoped>
  .task {
    position: relative;
    padding: 5px 0;
    margin: 2px 0;
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

  .task:hover .title-done {
    color: #444;
    text-decoration: none;
  }

  .task-mask {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
  }

  .task-mask-animate {
    animation: buffer-loading 2s infinite;
    animation-timing-function: ease-out;
  }
</style>
