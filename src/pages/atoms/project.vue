<template>
  <div class="project">
    <h3>{{project.title}}</h3>
    <button class="btn-remove" @click="triggerDelete">x</button>
  </div>
</template>

<script>
    import {deleteProject} from "../../apis/project";

    export default {
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

  }

  .btn-remove {

  }
</style>
