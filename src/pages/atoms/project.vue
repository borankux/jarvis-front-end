<template>
  <div class="project">
    <div class="info">
      <span class="title">{{project.title}}</span>
      <button class="btn-remove" @click="triggerDelete">x</button>
    </div>
    <progress-bar class="progress-bar" :progress="getProgress"></progress-bar>
    <div style="clear: both;"></div>
  </div>
</template>

<script>
    import {deleteProject} from "../../apis/project";
    import ProgressBar from '../../pages/atoms/progress-bar';

    export default {
        components:{
            'progress-bar' :ProgressBar
        },
        name: "project",
        props: {
            project: {
                type: Object,
                default: {
                    title: 'Untitled',
                    status: true,
                    id:0
                }
            }
        },
        data () {
            return {

            }
        },
        computed:{
            getProgress()
            {
                let tasks = this.project.tasks;
                if(tasks.length === 0) {
                    return 0;
                }

                let progress = 0;
                tasks.forEach( task => {
                    if(task.status === 1) {
                        progress ++;
                    }
                });
                return Math.ceil(100 * (progress/tasks.length));
            }
        },
        methods: {
            triggerDelete()
            {
                let that = this;
                let pid = this.project.id;
                this.$swal({
                    title: '你确定删除吗?',
                    text: "删除后不可恢复",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: '确定!',
                    cancelButtonText:'算了'
                }).then(result => {

                    let ok = false;
                    if(result.hasOwnProperty('value')) {
                        ok = result.value
                    }
                    if(ok){
                        deleteProject(pid).then(res => {
                            if(res.code === 20000) {
                                that.$emit('deleted');
                            } else {
                                that.$swal('Oops!', '删除失败！', 'error')
                            }
                        }).catch(err => {
                            that.$swal('Oops！', '删除失败！', 'error')
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped>
  .project {
    max-width: 300px;
    padding: 5px;
    margin: 10px;
    box-shadow: 1px 1px 6px 2px #ccc;
    border-radius: 3px;
  }

  .btn-remove {
    display: block;
    float: right;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    background-color: beige;
    border: 1px solid red;
    border-radius: 10px;
    margin-right: 5px;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;
  }

  .btn-remove:hover {
    background-color: red;
    color: white;
  }

  .info {
    float: left;
    width: 100%;
    padding: 5px;
  }

  .info .title {
    display: block;
    float: left;
    font-size: 1em;
  }

  .progress-bar {
    float: left;
  }
</style>
